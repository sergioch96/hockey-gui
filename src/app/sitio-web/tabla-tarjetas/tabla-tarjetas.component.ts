import { Component, OnInit } from '@angular/core';
import { JugadorPartidoDTO } from 'src/app/models/modelsCommon';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-tabla-tarjetas',
  templateUrl: './tabla-tarjetas.component.html',
  styleUrls: ['./tabla-tarjetas.component.css']
})
export class TablaTarjetasComponent implements OnInit {

  tarjetas: JugadorPartidoDTO[] = [];

  constructor(
    private _campeonatoService: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.obtenerTablaAcumulacionTarjetas();
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
