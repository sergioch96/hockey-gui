import { Component, OnInit } from '@angular/core';
import { JUGADOR } from 'src/app/datos-prueba/datos.json';
import { ESTADO_PARTIDO } from 'src/app/models/constantes';
import { ListaEquiposDTO, PartidoDTO, PersonaDTO } from 'src/app/models/modelsCommon';
import * as moment from 'moment'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { JugadorDTO } from 'src/app/datos-prueba/models-prueba';
import { PartidoService } from 'src/app/services/partido.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { AutoridadService } from 'src/app/services/autoridad.service';

@Component({
  selector: 'app-gestion-partidos',
  templateUrl: './gestion-partidos.component.html',
  styleUrls: ['./gestion-partidos.component.css']
})
export class GestionPartidosComponent implements OnInit {

  // lista original de partidos
  _listaPartidos: PartidoDTO[] = [];
  estados = ESTADO_PARTIDO;
  fechasTorneo: string[] = [];
  cantidadDeFechas: number = 0;
  equipos: ListaEquiposDTO[] = [];
  arbitros: PersonaDTO[] = [];
  jueces: PersonaDTO[] = [];
  jugadores = JUGADOR;
  jugadoresNegro: JugadorDTO[] = [];
  jugadoresRojo: JugadorDTO[] = [];

  // lista filtrada de partidos
  listaPartidos: PartidoDTO[] = [];

  filtroEstado: string = "";
  filtroFechaTorneo: string = "";
  filtroEquipo: string = "";
  filtroFecha: string = "";

  fechaProgramar: string = "";
  horaProgramar: string = "";
  arbitro1Programar: string = "";
  arbitro2Programar: string = "";
  juezProgramar: string = "";
  equipo1Programar: string | undefined;
  equipo2Programar: string | undefined;
  fechaTorneoProgramar: string | undefined;

  partidoSeleccionado: PartidoDTO = {};

  diaCargar: string | undefined;
  horaCargar: string | undefined;

  golesLocal: number = 0;
  golesVisitante: number = 0;

  valoresVisitante: number[] = [];
  valoresLocal: number[] = [];

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private _partidoService: PartidoService,
    private _equipoService: EquipoService,
    private _autoridadService: AutoridadService
  ) { }

  ngOnInit(): void {
    this.obtenerPartidos();
    this.obtenerEquipos();
    this.obtenerAutoridades();
    this.jugadoresNegro = this.jugadores.filter(x => x.Equipo == 'Deportivo Negro');
    this.jugadoresRojo = this.jugadores.filter(x => x.Equipo == 'Deportivo Rojo');
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
    var partido = this._listaPartidos.find(x => x.idPartido == par.idPartido);
    this.equipo1Programar = partido?.equipoLocal;
    this.equipo2Programar = partido?.equipoVisitante;
    this.fechaTorneoProgramar = partido?.fechaTorneo;
    this.partidoSeleccionado = par;

    this.modalService.open(modalProgramar);
  }

  programarPartido() {
    var result = this._listaPartidos.find(x => x.idPartido == this.partidoSeleccionado.idPartido);
    
    if (result?.estado != "Pendiente") {
      this.toastr.error('El partido seleccionado ya fue programado', 'Error');
      this.limpiarModal();
      return;
    }

    const partido: PartidoDTO = {
      idPartido: result?.idPartido,
      fechaTorneo: result?.fechaTorneo,
      estado: "Programado",
      dia: moment(this.fechaProgramar).format('DD/MM/YYYY'),
      hora: this.horaProgramar,
      equipoLocal: result?.equipoLocal,
      golesLocal: 0,
      equipoVisitante: result?.equipoVisitante,
      golesVisitante: 0,
    }

    const index = this._listaPartidos.indexOf(this.partidoSeleccionado);

    if (index !== -1) {
      this._listaPartidos.splice(index, 1, partido);
      this.toastr.success('Se programo el partido correctamente', 'Partido programado');
    }
    else {
      this.toastr.error('No se pudo programar el partido', 'Error');
    }
    this.limpiarModal();
  }

  limpiarModal() {
    this.fechaProgramar = "";
    this.horaProgramar = "";
    this.arbitro1Programar = "";
    this.arbitro2Programar = "";
    this.juezProgramar = "";
    this.golesLocal = 0;
    this.golesVisitante = 0;
    this.modalService.dismissAll();
  }

  mostrarCargar(modalCargar: any, par: PartidoDTO) {
    var partido = this._listaPartidos.find(x => x.idPartido == par.idPartido);
    this.equipo1Programar = partido?.equipoLocal;
    this.equipo2Programar = partido?.equipoVisitante;
    this.fechaTorneoProgramar = partido?.fechaTorneo;
    this.diaCargar = partido?.dia;
    this.horaCargar = partido?.hora;
    this.partidoSeleccionado = par;

    this.modalService.open(modalCargar, { size: 'xl' });
  }

  cargarPartido() {
    var result = this._listaPartidos.find(x => x.idPartido == this.partidoSeleccionado.idPartido);
    
    if (result?.estado != "Programado") {
      this.toastr.error('El partido seleccionado debe tener un estado programado para cargar', 'Error');
      this.limpiarModal();
      return;
    }

    const partido: PartidoDTO = {
      idPartido: result?.idPartido,
      fechaTorneo: result?.fechaTorneo,
      estado: "Finalizado",
      dia: result.dia,
      hora: result.hora,
      equipoLocal: result?.equipoLocal,
      golesLocal: this.golesLocal,
      equipoVisitante: result?.equipoVisitante,
      golesVisitante: this.golesVisitante,
    }

    const index = this._listaPartidos.indexOf(this.partidoSeleccionado);

    if (index !== -1) {
      this._listaPartidos.splice(index, 1, partido);
      this.toastr.success('El partido Se cargó correctamente', 'Partido finalizado');
    }
    else {
      this.toastr.error('No se pudo finalizar el partido', 'Error');
    }
    this.limpiarModal();
  }

  cargarGolesVisitante() {
    var suma: number = 0;
    for (var i = 0; i < this.valoresVisitante.length; i++) {
      if (this.valoresVisitante[i] != undefined) {
        suma += this.valoresVisitante[i];
      }
    }
    this.golesVisitante = suma;
  }

  cargarGolesLocal() {
    var suma: number = 0;
    for (var i = 0; i < this.valoresLocal.length; i++) {
      if (this.valoresLocal[i] != undefined) {
        suma += this.valoresLocal[i];
      }
    }
    this.golesLocal = suma;
  }

}
