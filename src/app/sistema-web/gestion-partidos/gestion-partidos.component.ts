import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ARBITRO, EQUIPO, FECHA_TORNEO, JUEZ, JUGADOR, PARTIDO } from 'src/app/datos-prueba/datos.json';
import { ESTADO_PARTIDO } from 'src/app/models/constantes';
import { PartidoDTO } from 'src/app/models/modelsCommon';
import * as moment from 'moment'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { JugadorDTO } from 'src/app/datos-prueba/models-prueba';

@Component({
  selector: 'app-gestion-partidos',
  templateUrl: './gestion-partidos.component.html',
  styleUrls: ['./gestion-partidos.component.css']
})
export class GestionPartidosComponent implements OnInit {

  private partidosSubject: BehaviorSubject<PartidoDTO[]>;
  public listPartido: Observable<PartidoDTO[]>;

  _listaPartidos = PARTIDO;
  estados = ESTADO_PARTIDO;
  fechasTorneo = FECHA_TORNEO;
  equipos = EQUIPO;
  arbitros = ARBITRO;
  jueces = JUEZ;
  jugadores = JUGADOR;
  jugadoresNegro: JugadorDTO[] = [];
  jugadoresRojo: JugadorDTO[] = [];

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
    private toastr: ToastrService
  ) {
    this.partidosSubject = new BehaviorSubject<PartidoDTO[]>(PARTIDO);
    this.listPartido = this.partidosSubject.asObservable();

    this.listPartido.subscribe(res =>
      this.listaPartidos = res
    );
   }

  ngOnInit(): void {
    this.jugadoresNegro = this.jugadores.filter(x => x.Equipo == 'Deportivo Negro');
    this.jugadoresRojo = this.jugadores.filter(x => x.Equipo == 'Deportivo Rojo');
  }

  FiltrarPartidos() {
    
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
