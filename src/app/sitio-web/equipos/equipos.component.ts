import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaEquiposDTO } from 'src/app/models/modelsCommon';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  listaEquipos: ListaEquiposDTO[] = [];

  constructor(
    private _equipoService: EquipoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos() {
    this._equipoService.obtenerEquipos().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.listaEquipos = resultado.data;
          this.listaEquipos = this.listaEquipos.filter(x => x.estado == true);
        }
      }, error => {
        console.log('Ocurrió un error al obtener equipos participantes', 'Error');
      }
    );
  }

  planillaJugadores(idEquipo: number | undefined)
  {
    this.router.navigate(['/planilla-jugadores', idEquipo]);
  }

}
