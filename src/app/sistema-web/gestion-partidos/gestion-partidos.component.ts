import { Component, OnInit } from '@angular/core';
import { ESTADO_PARTIDO } from 'src/app/models/constantes';
import { JugadorPartidoDTO, ListaEquiposDTO, PartidoDTO, PersonaDTO } from 'src/app/models/modelsCommon';
import * as moment from 'moment'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PartidoService } from 'src/app/services/partido.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { AutoridadService } from 'src/app/services/autoridad.service';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-gestion-partidos',
  templateUrl: './gestion-partidos.component.html',
  styleUrls: ['./gestion-partidos.component.css']
})
export class GestionPartidosComponent implements OnInit {

  // lista original de partidos
  _listaPartidos: PartidoDTO[] = [];
  // lista filtrada de partidos
  listaPartidos: PartidoDTO[] = [];
  
  // lista de jugadores
  jugadoresLocal: JugadorPartidoDTO[] = [];
  jugadoresVisitante: JugadorPartidoDTO[] = [];

  // datos para lista desplegable
  estados = ESTADO_PARTIDO;
  fechasTorneo: string[] = [];
  cantidadDeFechas: number = 0;
  equipos: ListaEquiposDTO[] = [];
  arbitros: PersonaDTO[] = [];
  jueces: PersonaDTO[] = [];

  // filtros
  filtroEstado: string = "";
  filtroFechaTorneo: string = "";
  filtroEquipo: string = "";
  filtroFecha: string = "";
  
  // partido seleccionado en programar o cargar
  partidoSeleccionado: PartidoDTO = {};

  // datos para programar partido
  fechaProgramar: string = "";
  horaProgramar: string = "";
  idArbitro1Programar: number | undefined;
  idArbitro2Programar: number | undefined;
  idJuezProgramar: number | undefined;
  equipo1Programar: string | undefined;
  equipo2Programar: string | undefined;
  fechaTorneoProgramar: string | undefined;

  // datos para programar partido
  diaCargar: string | undefined;
  horaCargar: string | undefined;
  capitanLocal: string | undefined;
  capitanVisitante: string | undefined;
  arbitro1Cargar: string | undefined;
  arbitro2Cargar: string | undefined;
  juezCargar: string | undefined;
  golesLocal: number | undefined;
  golesVisitante: number | undefined;

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private _partidoService: PartidoService,
    private _equipoService: EquipoService,
    private _autoridadService: AutoridadService,
    private _jugadorService: JugadorService
  ) { }

  ngOnInit(): void {
    this.obtenerPartidos();
    this.obtenerEquipos();
    this.obtenerAutoridades();
  }

  obtenerPartidos() {
    this._partidoService.obtenerPartidos().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this._listaPartidos = resultado.data;
          this.listaPartidos = resultado.data;
          this.calcularFechasTorneo();
        } else {
          this.toastr.error(resultado.mensaje, 'Ocurrió un error al obtener los partidos');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al obtener los partidos', 'Error');
      }
    );
  }

  calcularFechasTorneo() {
    let cantidadPartidos = this.listaPartidos.length;
    let fechaTorneo = this.listaPartidos[cantidadPartidos - 1].fechaTorneo;
    let fechas = fechaTorneo?.substring(fechaTorneo.length - 1);
    this.cantidadDeFechas = Number(fechas);

    for (let index = 1; index <= this.cantidadDeFechas; index++) {
      this.fechasTorneo.push("fecha " + index);      
    }
  }

  obtenerEquipos() {
    this._equipoService.obtenerEquipos().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.equipos = resultado.data;
          this.equipos = this.equipos.filter(x => x.estado == true);
        } else {
          this.toastr.error(resultado.mensaje, 'Ocurrió un error al obtener equipos');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al obtener equipos', 'Error');
      }
    );
  }

  obtenerAutoridades() {
    this._autoridadService.obtenerAutoridades().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          let autoridades: PersonaDTO[] = resultado.data;
          this.arbitros = autoridades.filter(x => x.idRol == 5);
          this.jueces = autoridades.filter(x => x.idRol == 6);
        } else {
          this.toastr.error(resultado.mensaje, 'Ocurrió un error al obtener arbitros y jueces');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al obtener arbitros y jueces', 'Error');
      }
    );
  }

  filtrarPartidos() {
    var dia: string = "";
    if (this.filtroFecha != "")
      dia = moment(this.filtroFecha).format('DD/MM/YYYY');
    
    this.listaPartidos = this._listaPartidos.filter(x => 
      (this.filtroEstado == "" || x.estado == this.filtroEstado)
      && (this.filtroFechaTorneo == "" || x.fechaTorneo == this.filtroFechaTorneo)
      && (this.filtroEquipo == "" || x.equipoLocal == this.filtroEquipo || x.equipoVisitante == this.filtroEquipo)
      && (this.filtroFecha == "" || x.dia == dia)
    );
  }

  limpiarFiltros() {
    this.filtroEstado = "";
    this.filtroFechaTorneo = "";
    this.filtroEquipo = "";
    this.filtroFecha = "";
  }

  mostrarProgramar(modalProgramar: any, par: PartidoDTO) {
    this.equipo1Programar = par.equipoLocal;
    this.equipo2Programar = par.equipoVisitante;
    this.fechaTorneoProgramar = par.fechaTorneo;
    this.partidoSeleccionado = par;

    this.modalService.open(modalProgramar);
  }

  programarPartido() {
    if (this.partidoSeleccionado.estado != "Pendiente") {
      this.toastr.error('El partido seleccionado ya fue programado', 'Error');
      this.limpiarModal();
      return;
    }

    const partido: PartidoDTO = {
      idPartido: this.partidoSeleccionado.idPartido,
      idEstado: 1,
      dia: this.fechaProgramar,
      hora: this.horaProgramar,
      idArbitro1: this.idArbitro1Programar,
      idArbitro2: this.idArbitro2Programar,
      idJuez: this.idJuezProgramar
    }

    this._partidoService.programarPartido(partido).subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.obtenerPartidos();
          this.toastr.success(resultado.mensaje, 'Partido programado');
        } else {
          this.toastr.error(resultado.mensaje, 'Error');
        }
      }, error => {
        this.toastr.error('No se pudo programar el partido', 'Error');
      }
    );
    
    this.limpiarModal();
  }

  limpiarModal() {
    this.fechaProgramar = "";
    this.horaProgramar = "";
    this.idArbitro1Programar = 0;
    this.idArbitro2Programar = 0;
    this.idJuezProgramar = 0;
    this.modalService.dismissAll();
  }

  async mostrarCargar(modalCargar: any, par: PartidoDTO) {
    this.equipo1Programar = par.equipoLocal;
    this.equipo2Programar = par.equipoVisitante;
    this.fechaTorneoProgramar = par.fechaTorneo;
    this.diaCargar = par.dia;
    this.horaCargar = par.hora;
    this.capitanLocal = par.capitanLocal;
    this.capitanVisitante = par.capitanVisitante;
    this.golesLocal = par.golesLocal;
    this.golesVisitante = par.golesVisitante;
    this.arbitro1Cargar = par.arbitro1;
    this.arbitro2Cargar = par.arbitro2;
    this.juezCargar = par.juez;
    this.partidoSeleccionado = par;

    if (par.idEstado == 1) {
      let jugLocal = await this._jugadorService.getJugadoresCargarPlanilla(par.idEquipoLocal).toPromise();
      if (jugLocal != null)
        this.jugadoresLocal = jugLocal.data;
  
      let jugVisitante = await this._jugadorService.getJugadoresCargarPlanilla(par.idEquipoVisitante).toPromise();
      if (jugVisitante != null)
        this.jugadoresVisitante = jugVisitante.data;
    } else {
      let jugLocal = await this._jugadorService.getJugadoresPartidoDisputado(par.idEquipoLocal, par.idPartido).toPromise();
      if (jugLocal != null)
        this.jugadoresLocal = jugLocal.data;
  
      let jugVisitante = await this._jugadorService.getJugadoresPartidoDisputado(par.idEquipoVisitante, par.idPartido).toPromise();
      if (jugVisitante != null)
        this.jugadoresVisitante = jugVisitante.data;
    }

    this.modalService.open(modalCargar, { size: 'xl' });
  }

  cargarPartido() {
    if (this.partidoSeleccionado.estado != "Programado") {
      this.toastr.error('El partido seleccionado debe tener un estado programado para cargar', 'Error');
      this.limpiarModal();
      return;
    }

    const partido: PartidoDTO = {
      idPartido: this.partidoSeleccionado.idPartido,
      idEstado: 2,
      golesLocal: this.golesLocal,
      golesVisitante: this.golesVisitante,
      capitanLocal: this.capitanLocal,
      capitanVisitante: this.capitanVisitante
    }

    console.log(this.jugadoresLocal);
    console.log(this.jugadoresVisitante);

    // this._partidoService.programarPartido(partido).subscribe(
    //   resultado => {
    //     if (resultado.exito === 0) {
    //       this.obtenerPartidos();
    //       this.toastr.success(resultado.mensaje, 'Partido finalizado');
    //     } else {
    //       this.toastr.error(resultado.mensaje, 'Error');
    //     }
    //   }, error => {
    //     this.toastr.error('No se pudo finalizar el partido', 'Error');
    //   }
    // );

    this.limpiarModal();
  }

  cargarGolesLocal() {
    this.golesLocal = 0;
    this.jugadoresLocal.forEach(x => {
      if (this.golesLocal != undefined && x.goles != undefined)
        this.golesLocal += x.goles;
    })

  }
  
  cargarGolesVisitante() {
    this.golesVisitante = 0;
    this.jugadoresVisitante.forEach(x => {
      if (this.golesVisitante != undefined && x.goles != undefined)
        this.golesVisitante += x.goles;
    })
  }
}
