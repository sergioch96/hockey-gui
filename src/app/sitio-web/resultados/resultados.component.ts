import { Component, OnInit } from '@angular/core';
import { PartidoDTO } from 'src/app/models/modelsCommon';
import { PartidoService } from 'src/app/services/partido.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  partidosJugados: PartidoDTO[] = [];

  constructor(
    private _partidoService: PartidoService,
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

}
