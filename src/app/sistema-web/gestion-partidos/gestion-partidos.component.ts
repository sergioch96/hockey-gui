import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ARBITRO, EQUIPO, FECHA_TORNEO, JUEZ, PARTIDO } from 'src/app/datos-prueba/datos.json';
import { ESTADO_PARTIDO } from 'src/app/models/constantes';
import { PartidoDTO } from 'src/app/models/modelsCommon';
import * as moment from 'moment'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

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
  }

  FiltrarPartidos() {
    
    var dia: string = "";
    if (this.filtroFecha != "")
      dia = moment(this.filtroFecha).format('DD/MM/YYYY');
    
    this.listaPartidos = this._listaPartidos.filter(x => 
      (this.filtroEstado == "" || x.Estado == this.filtroEstado)
      && (this.filtroFechaTorneo == "" || x.FechaTorneo == this.filtroFechaTorneo)
      && (this.filtroEquipo == "" || x.EquipoLocal == this.filtroEquipo || x.EquipoVisitante == this.filtroEquipo)
      && (this.filtroFecha == "" || x.Dia == dia)
    );
  }

  limpiarFiltros() {
    this.filtroEstado = "";
    this.filtroFechaTorneo = "";
    this.filtroEquipo = "";
    this.filtroFecha = "";
  }

  mostrarProgramar(modalProgramar: any, par: PartidoDTO) {
    var partido = this._listaPartidos.find(x => x.IdPartido == par.IdPartido);
    this.equipo1Programar = partido?.EquipoLocal;
    this.equipo2Programar = partido?.EquipoVisitante;
    this.fechaTorneoProgramar = partido?.FechaTorneo;
    this.partidoSeleccionado = par;

    this.modalService.open(modalProgramar);
  }

  programarPartido() {
    var result = this._listaPartidos.find(x => x.IdPartido == this.partidoSeleccionado.IdPartido);
    
    if (result?.Estado != "Pendiente") {
      this.toastr.error('El partido seleccionado ya fue programado', 'Error');
      this.limpiarModal();
      return;
    }

    const partido: PartidoDTO = {
      IdPartido: result?.IdPartido,
      FechaTorneo: result?.FechaTorneo,
      Estado: "Programado",
      Dia: moment(this.fechaProgramar).format('DD/MM/YYYY'),
      Hora: this.horaProgramar,
      EquipoLocal: result?.EquipoLocal,
      GolesLocal: 0,
      EquipoVisitante: result?.EquipoVisitante,
      GolesVisitante: 0,
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
    this.modalService.dismissAll();
  }

  mostrarCargar(modalCargar: any, par: PartidoDTO) {
    var partido = this._listaPartidos.find(x => x.IdPartido == par.IdPartido);
    this.equipo1Programar = partido?.EquipoLocal;
    this.equipo2Programar = partido?.EquipoVisitante;
    this.fechaTorneoProgramar = partido?.FechaTorneo;
    this.diaCargar = partido?.Dia;
    this.horaCargar = partido?.Hora;
    this.partidoSeleccionado = par;

    this.modalService.open(modalCargar, { size: 'xl' });
  }

  cargarPartido() {

  }

}
