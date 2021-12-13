import { Component, OnInit } from '@angular/core';
import { JugadorPartidoDTO } from 'src/app/models/modelsCommon';
import { CampeonatoService } from 'src/app/services/campeonato.service';

@Component({
  selector: 'app-tabla-goleadores',
  templateUrl: './tabla-goleadores.component.html',
  styleUrls: ['./tabla-goleadores.component.css']
})
export class TablaGoleadoresComponent implements OnInit {

  goleadores: JugadorPartidoDTO[] = [];

  constructor(
    private _campeonatoService: CampeonatoService
  ) { }

  ngOnInit(): void {
    this.obtenerTablaGoleadores();
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

}
