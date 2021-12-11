import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/login/login.component';
import { JugadorPartidoDTO, PartidoDTO, TablaPosicionesDTO } from 'src/app/models/modelsCommon';
import { CampeonatoService } from 'src/app/services/campeonato.service';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabla: TablaPosicionesDTO[] = [];
  goleadores: JugadorPartidoDTO[] = [];
  encuentros: PartidoDTO[] = [];
  resultados: PartidoDTO[] = [];
  tarjetas: JugadorPartidoDTO[] = [];

  constructor(
    private modalService: NgbModal,
    private _partidoService: PartidoService,
    private _campeonatoService: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.obtenerPartidos();
    this.obtenerTablaPosiciones();
    this.obtenerTablaGoleadores();
    this.obtenerTablaAcumulacionTarjetas();
  }

  abrirLogin() {
    this.modalService.open(LoginComponent);
  }

  obtenerPartidos() {
    this._partidoService.obtenerPartidos().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          let partidos: PartidoDTO[] = resultado.data;
          this.encuentros = partidos.filter(x => x.idEstado == 1);
          this.resultados = partidos.filter(x => x.idEstado == 2);
        }
      }, error => {
        console.log('Ocurrió un error al obtener los partidos', 'Error');
      }
    );
  }

  obtenerTablaPosiciones() {
    this._campeonatoService.obtenerTablaPosiciones().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.tabla = resultado.data;
        }
      }, error => {
        console.log('Ocurrió un error al obtener tabla de posiciones', 'Error');
      }
    );
  }

  obtenerTablaGoleadores() {
    this._campeonatoService.obtenerTablaGoleadores().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.goleadores = resultado.data;
        }
      }, error => {
        console.log('Ocurrió un error al obtener tabla de goleadores', 'Error');
      }
    );
  }

  obtenerTablaAcumulacionTarjetas() {
    this._campeonatoService.obtenerTablaAcumulacionTarjetas().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.tarjetas = resultado.data;
        }
      }, error => {
        console.log('Ocurrió un error al obtener tabla de acumulación de tarjetas', 'Error');
      }
    );
  }
}
