import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ListaEquiposDTO } from 'src/app/models/modelsCommon';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-gestion-equipos',
  templateUrl: './gestion-equipos.component.html',
  styleUrls: ['./gestion-equipos.component.css']
})
export class GestionEquiposComponent implements OnInit {

  listaEquipos: ListaEquiposDTO[] = [];

  constructor(
    private _equipoService: EquipoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos() {
    this._equipoService.obtenerEquipos().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.listaEquipos = resultado.data;
        } else {
          this.toastr.error(resultado.mensaje, 'Ocurrió un error al obtener equipos');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al obtener equipos', 'Error');
      }
    );
  }

}
