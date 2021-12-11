import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GOLEADOR, TABLA_POSICIONES, TARJETA } from 'src/app/datos-prueba/datos.json';
import { LoginComponent } from 'src/app/login/login.component';
import { PartidoDTO } from 'src/app/models/modelsCommon';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabla = TABLA_POSICIONES;
  goleadores = GOLEADOR;
  encuentros: PartidoDTO[] = [];
  resultados: PartidoDTO[] = [];
  tarjetas = TARJETA;

  constructor(
    private modalService: NgbModal,
    private _partidoService: PartidoService
  ) { }

  ngOnInit(): void {
    this.obtenerPartidos();
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
}
