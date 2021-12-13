import { Component, OnInit } from '@angular/core';
import { TablaPosicionesDTO } from 'src/app/models/modelsCommon';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-tabla-posiciones',
  templateUrl: './tabla-posiciones.component.html',
  styleUrls: ['./tabla-posiciones.component.css']
})
export class TablaPosicionesComponent implements OnInit {

  tabla: TablaPosicionesDTO[] = [];

  constructor(
    private _campeonatoService: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.obtenerTablaPosiciones();
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

}
