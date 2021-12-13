import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JugadorPartidoDTO, PartidoDTO } from 'src/app/models/modelsCommon';
import { JugadorService } from 'src/app/services/jugador.service';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  partidosJugados: PartidoDTO[] = [];
  partidoSeleccionado: PartidoDTO = {};
  dia: string | undefined;
  hora: string | undefined;
  equipo1: string | undefined;
  equipo2: string | undefined;
  golesLocal: number | undefined;
  golesVisitante: number | undefined;
  fechaTorneo: string | undefined;

  // lista de jugadores
  jugadoresLocal: JugadorPartidoDTO[] = [];
  jugadoresVisitante: JugadorPartidoDTO[] = [];

  constructor(
    private modalService: NgbModal,
    private _partidoService: PartidoService,
    private _jugadorService: JugadorService
  ) { }

  ngOnInit(): void {
    this.obtenerPartidos();
  }

  obtenerPartidos() {
    this._partidoService.obtenerPartidos().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          let partidos: PartidoDTO[] = resultado.data;
          this.partidosJugados = partidos.filter(x => x.idEstado == 2);
        }
      }, error => {
        console.log('Ocurrió un error al obtener los partidos disputados', 'Error');
      }
    );
  }

  async mostrarDetalle(modalDetalle: any, par: PartidoDTO) {
    this.equipo1 = par.equipoLocal;
    this.equipo2 = par.equipoVisitante;
    this.fechaTorneo = par.fechaTorneo;
    this.dia = par.dia;
    this.hora = par.hora;
    this.golesLocal = par.golesLocal;
    this.golesVisitante = par.golesVisitante;
    this.partidoSeleccionado = par;

    let jugLocal = await this._jugadorService.getJugadoresPartidoDisputado(par.idEquipoLocal, par.idPartido).toPromise();
    if (jugLocal != null)
      this.jugadoresLocal = jugLocal.data;
      this.jugadoresLocal = this.jugadoresLocal.filter(x => x.goles != undefined && x.goles > 0);

    let jugVisitante = await this._jugadorService.getJugadoresPartidoDisputado(par.idEquipoVisitante, par.idPartido).toPromise();
    if (jugVisitante != null)
      this.jugadoresVisitante = jugVisitante.data;
      this.jugadoresVisitante = this.jugadoresVisitante.filter(x => x.goles != undefined && x.goles > 0);

    this.modalService.open(modalDetalle, { size: 'lg' });
  }

}
