import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EQUIPO, FECHA_TORNEO, PARTIDO } from 'src/app/datos-prueba/datos.json';
import { ESTADO_PARTIDO } from 'src/app/models/constantes';
import { PartidoDTO } from 'src/app/models/modelsCommon';

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

  listaPartidos: PartidoDTO[] = [];

  filtroEstado: string = "";
  filtroFechaTorneo: string = "";
  filtroEquipo: string = "";
  filtroFecha: string = "";

  constructor() {
    this.partidosSubject = new BehaviorSubject<PartidoDTO[]>(PARTIDO);
    this.listPartido = this.partidosSubject.asObservable();

    this.listPartido.subscribe(res =>
      this.listaPartidos = res
    );
   }

  ngOnInit(): void {
  }

  FiltrarPartidos() {
    
    var dia: string;
    if (this.filtroFecha != "") {
      
      switch (this.filtroFecha) {
        case "2021-09-25":
          dia = "25/09/2021"
          break;
        case "2021-09-26":
          dia = "26/09/2021"
          break;
        case "2021-10-02":
          dia = "02/10/2021"
          break;
        case "2021-10-03":
          dia = "03/10/2021"
          break;
        case "2021-10-09":
          dia = "09/10/2021"
          break;
        case "2021-10-10":
          dia = "10/10/2021"
          break;
        default:
          break;
      }
    }

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

}
