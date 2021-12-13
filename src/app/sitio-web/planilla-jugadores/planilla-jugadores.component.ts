import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JugadorPartidoDTO, ListaEquiposDTO } from 'src/app/models/modelsCommon';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-planilla-jugadores',
  templateUrl: './planilla-jugadores.component.html',
  styleUrls: ['./planilla-jugadores.component.css']
})
export class PlanillaJugadoresComponent implements OnInit {

  idEquipo: number = 0;
  equipo: ListaEquiposDTO = {};
  listaJugadores: JugadorPartidoDTO[] = [];

  constructor(
    private _router: ActivatedRoute,
    private _equipoService: EquipoService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    let idEquipoParam = this._router.snapshot.paramMap.get('id');
    this.idEquipo = idEquipoParam != null && idEquipoParam != '' ? +idEquipoParam : 0;

    if (this.idEquipo > 0) {
      this.getEquipo(this.idEquipo);
      this.obtenerPlanillaJugadores(this.idEquipo);
    }
  }

  getEquipo(idEquipo: number) {
    this._equipoService.getEquipo(idEquipo).subscribe(
      respuesta => {
        if (respuesta.exito === 0) {
          this.equipo = respuesta.data;
        }
      }, error => {
        this.toastr.error('Ocurrio un error al intentar recuperar el equipo seleccionado');
      }
    );
  }

  obtenerPlanillaJugadores(idEquipo: number) {
    this._equipoService.obtenerPlanillaJugadores(idEquipo).subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.listaJugadores = resultado.data;
        }
      }, error => {
        this.toastr.error('Ocurrio un error al intentar recuperar la planilla de jugadores del equipo');
      }
    )
  }
}
