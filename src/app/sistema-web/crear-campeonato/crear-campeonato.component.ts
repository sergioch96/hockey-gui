import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TIPO_TORNEO } from 'src/app/models/constantes';
import { EmparejamientoDTO, ListaEquiposDTO, NumeroParticipanteDTO, PartidoDTO } from 'src/app/models/modelsCommon';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-crear-campeonato',
  templateUrl: './crear-campeonato.component.html',
  styleUrls: ['./crear-campeonato.component.css']
})
export class CrearCampeonatoComponent implements OnInit {

  _tiposTorneo = TIPO_TORNEO;

  listaEquipos: ListaEquiposDTO[] = [];
  equiposDisponibles: ListaEquiposDTO[] = [];
  equiposAsignados: ListaEquiposDTO[] = [];

  encuentrosProgramados: PartidoDTO[] = [];
  numerosParticipantes: NumeroParticipanteDTO[] = [];

  tipoTorneo: string = "";
  rueda: number = 1;

  constructor(
    private toastr: ToastrService,
    private _equipoService: EquipoService
  ) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos() {
    this._equipoService.obtenerEquipos().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.listaEquipos = resultado.data;
          this.equiposDisponibles = resultado.data;
        } else {
          this.toastr.error(resultado.mensaje, 'Ocurrió un error al obtener equipos');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al obtener equipos', 'Error');
      }
    );
  }

  private _actualizarAsignacionEquipos() {
    this.equiposDisponibles = [];
    if (this.listaEquipos) {
      if (this.equiposAsignados && this.equiposAsignados.length > 0) {
        this.listaEquipos.forEach(equipo => {
          const equipoA = this.equiposAsignados.find(x => x.idEquipo == equipo.idEquipo);
          if (!equipoA) {
            this.equiposDisponibles.push(equipo);
          }
        });
      } else {
        this.equiposDisponibles = this.listaEquipos;
      }
    }
  }

  asignarEquipo(equipo: ListaEquiposDTO) {
    this.equiposAsignados.push(equipo);
    this._actualizarAsignacionEquipos();
  }

  desasignarEquipo(equipo: ListaEquiposDTO) {
    const index = this.equiposAsignados.indexOf(equipo);
    if (index !== -1) {
      this.equiposAsignados.splice(index, 1);
    }
    this._actualizarAsignacionEquipos();
  }

  // genera calendario de encuentros de acuerdo a cantidad de participantes
  generarPartidos() {
    let crucesGenerados;
    this.encuentrosProgramados = [];
    this.numerosParticipantes = [];
    
    crucesGenerados = this.calcularLiga(this.equiposAsignados.length);        
    this.asignarNumeroParticipante();
    this.crearPartidos(crucesGenerados);
    this.toastr.success('Se generaron los partidos del torneo', 'Emparejamientos');
    document.getElementById('emparejamientos')?.classList.remove('d-none');
    document.getElementById('btn-emparejamientos')?.classList.remove('d-none');
  }

  // asigna numeros aleatoriamente a cada participante para los emparejamientos 
  asignarNumeroParticipante() {
    let inserto: boolean;
    this.equiposAsignados.forEach(equipo => {
      inserto = false;
      while (!inserto) {
        var numeroAleatorio = Math.ceil(Math.random()*this.equiposAsignados.length);
        var existe = false;
        for (var i = 0; i < this.numerosParticipantes.length ; i++) {
          if (this.numerosParticipantes[i].numero == numeroAleatorio){
            existe = true;
            break;
          }
        }
        if (!existe) {
          let equipoParticipante: NumeroParticipanteDTO = {
            idEquipo: equipo.idEquipo,
            nombreEquipo: equipo.nombreEquipo,
            numero: numeroAleatorio
          }
          this.numerosParticipantes.push(equipoParticipante);
          inserto = true;
        }  
      }      
    });
  }

  // genera los cruces del fixture cuando la cantidad de equipos es par
  calcularLigaNumEquiposPar(numEquipos: number): any {
    var rondas = new Array();
    let numRondas: number = numEquipos - 1;
    let numPartidosPorRonda: number = numEquipos / 2;
    
    for (let i = 0, k = 0; i < numRondas; i++) {
      rondas[i] = new Array();

      for (let j = 0; j < numPartidosPorRonda; j++) {
        var partido: EmparejamientoDTO = {
          local: k,
          visitante: 0
        };
        rondas[i][j] = partido;
        k++;

        if (k == numRondas)
          k = 0;
      }      
    }

    for (let i = 0; i < numRondas; i++) {
      if (i % 2 == 0) {
        rondas[i][0].visitante = numEquipos - 1;
      }
      else {
        rondas[i][0].visitante = rondas[i][0].local;
        rondas[i][0].local = numEquipos - 1;
      }
    }

    let equipoMasAlto: number = numEquipos - 1;
    let equipoImparMasAlto: number = equipoMasAlto - 1;

    for (let i = 0, k = equipoImparMasAlto; i < numRondas; i++) {
      
      for (let j = 1; j < numPartidosPorRonda; j++) {
        rondas[i][j].visitante = k;
        k--;

        if (k == -1)
          k = equipoImparMasAlto;
      }
    }

    for (let i = 0; i < rondas.length; i++) {
      
      for (let j = 0; j < rondas[i].length; j++) {
          rondas[i][j].local++;
          rondas[i][j].visitante++;
      }
    }

    return rondas;
  }

  // genera los cruces del fixture cuando la cantidad de equipos es impar
  calcularLigaNumEquiposImpar(numEquipos: number): any {
    var rondas = new Array();
    let numRondas: number = numEquipos;
    let numPartidosPorRonda: number = ~~(numEquipos / 2);
    
    for (let i = 0, k = 0; i < numRondas; i++) {
      rondas[i] = new Array();

      for (let j = -1; j < numPartidosPorRonda; j++) {
        if (j >= 0) {
          var partido: EmparejamientoDTO = {
            local: k,
            visitante: 0
          };
          rondas[i][j] = partido;          
        }

        k++;

        if (k == numRondas)
          k = 0;
      }      
    }

    let equipoMasAlto: number = numEquipos - 1;

    for (let i = 0, k = equipoMasAlto; i < numRondas; i++) {
      
      for (let j = 0; j < numPartidosPorRonda; j++) {
        rondas[i][j].visitante = k;
        k--;

        if (k == -1)
          k = equipoMasAlto;
      }
    }

    for (let i = 0; i < rondas.length; i++) {
      
      for (let j = 0; j < rondas[i].length; j++) {
          rondas[i][j].local++;
          rondas[i][j].visitante++;
      }
    }

    return rondas;
  }

  calcularLiga(cantidadEquipos: number): any {
    if (cantidadEquipos % 2 == 0)
      return this.calcularLigaNumEquiposPar(cantidadEquipos);
    else
      return this.calcularLigaNumEquiposImpar(cantidadEquipos);
  }

  // crea los partidos asociando el numero de participante de cada equipo con los numeros del fixture generado
  crearPartidos(rondas: any) {
    //console.log("IDA");

    for (let i = 0; i < rondas.length; i++) {
      //console.log("Ronda " + (i + 1) + ": ");
      
      for (let j = 0; j < rondas[i].length; j++) {
          //console.log(" " + (rondas[i][j].local) + "-" + (rondas[i][j].visitante));

          let equipoLocal = this.numerosParticipantes.find(x => x.numero == rondas[i][j].local);
          let equipoVisitante = this.numerosParticipantes.find(x => x.numero == rondas[i][j].visitante);

          let partido: PartidoDTO = {
            fechaTorneo: "Fecha " + (i + 1),
            idEquipoLocal: equipoLocal?.idEquipo,
            equipoLocal: equipoLocal?.nombreEquipo,
            idEquipoVisitante: equipoVisitante?.idEquipo,
            equipoVisitante: equipoVisitante?.nombreEquipo
          }

          this.encuentrosProgramados.push(partido);
      }
    }

    if (this.rueda > 1) {
      //console.log("VUELTA");
  
      for (let i = 0; i < rondas.length; i++) {
        //console.log("Ronda " + (i + 1 + rondas.length) + ": ");
        
        for (let j = 0; j < rondas[i].length; j++) {
          //console.log(" " + (rondas[i][j].visitante) + "-" + (rondas[i][j].local));

          let equipoLocal = this.numerosParticipantes.find(x => x.numero == rondas[i][j].visitante);
          let equipoVisitante = this.numerosParticipantes.find(x => x.numero == rondas[i][j].local);

          let partido: PartidoDTO = {
            fechaTorneo: "Fecha " + (i + 1 + rondas.length),
            idEquipoLocal: equipoLocal?.idEquipo,
            equipoLocal: equipoLocal?.nombreEquipo,
            idEquipoVisitante: equipoVisitante?.idEquipo,
            equipoVisitante: equipoVisitante?.nombreEquipo
          }

          this.encuentrosProgramados.push(partido);
        }
      }
    }
  }

  crearCampeonato() {
    this.toastr.error('Ya existe un campeonato activo', 'Error');
  }
}
