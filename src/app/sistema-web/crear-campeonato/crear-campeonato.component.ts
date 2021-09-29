import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPAREJAMIENTOS, EQUIPO, PROXIMOS_ENCUENTROS, TIPO_TORNEO } from 'src/app/datos-prueba/datos.json';
import { EquipoDTO } from 'src/app/models/modelsCommon';

@Component({
  selector: 'app-crear-campeonato',
  templateUrl: './crear-campeonato.component.html',
  styleUrls: ['./crear-campeonato.component.css']
})
export class CrearCampeonatoComponent implements OnInit {

  _tiposTorneo = TIPO_TORNEO;
  _equiposDisponibles = EQUIPO;
  _equipos = EQUIPO;
  encuentros = EMPAREJAMIENTOS;

  equiposAsignados: EquipoDTO[] = [];

  tipoTorneo: string = "";

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  private _actualizarAsignacionEquipos() {
    this._equiposDisponibles = [];
    if (this._equipos) {
      if (this.equiposAsignados && this.equiposAsignados.length > 0) {
        this._equipos.forEach(equipo => {
          const equipoA = this.equiposAsignados.find(x => x.IdEquipo == equipo.IdEquipo);
          if (!equipoA) {
            this._equiposDisponibles.push(equipo);
          }
        });
      } else {
        this._equiposDisponibles = this._equipos;
      }
    }
  }

  asignarEquipo(equipo: EquipoDTO) {
    this.equiposAsignados.push(equipo);
    this._actualizarAsignacionEquipos();
  }

  desasignarEquipo(equipo: EquipoDTO) {
    const index = this.equiposAsignados.indexOf(equipo);
    if (index !== -1) {
      this.equiposAsignados.splice(index, 1);
    }
    this._actualizarAsignacionEquipos();
  }

  generarPartidos() {
    this.toastr.success('Se generaron los partidos del torneo', 'Emparejamientos');
    document.getElementById('emparejamientos')?.classList.remove('d-none');
  }

}
