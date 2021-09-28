import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Equipo, PersonaDTO } from 'src/app/models/modelsCommon';
import { EquipoService } from 'src/app/services/equipo.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  listaJugadores: PersonaDTO[] = [];
  formEquipo: FormGroup;
  formPersona: FormGroup;
  idEquipo: number | undefined;
  idJugador: number | undefined;
  tituloModalPersona: string = "";
  tipoPersona: string = "";
  directorTecnico: PersonaDTO | undefined;
  asistenteTecnico: PersonaDTO | undefined;
  preparadorFisico: PersonaDTO | undefined;
  cuerpoTecnico: PersonaDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private _equipoService: EquipoService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { 

    this.formEquipo = this.fb.group({
      NombreEquipo: ['', Validators.required],
      DirectorTecnico: [{value: '', disabled: true}, [Validators.required]],
      AsistenteTecnico: [{value: '', disabled: true}, [Validators.required]],
      PreparadorFisico: [{value: '', disabled: true}, [Validators.required]]
    })

    this.formPersona = this.fb.group({
      NombreApellido: ['', Validators.required],
      NumDocumento: ['', [Validators.required]],
      FechaNacimiento: ['', [Validators.required]],
      Telefono: [''],
      Email: ['']
    })
  }

  ngOnInit(): void {
  }

  agregarEquipo() {
    const equipo : Equipo = {
      NombreEquipo: this.formEquipo.get('NombreEquipo')?.value,
      CuerpoTecnico: this.cuerpoTecnico
    };
    this._equipoService.agregarEquipo(equipo).subscribe(
      resultado => {
        
        if (resultado.exito === 0) {
          this.toastr.success(resultado.mensaje, 'Equipo agregado');
          this.formEquipo.get('NombreEquipo')?.disable;
          document.getElementById('btnAddEquipo')?.classList.add('d-none');
        } else {
          this.toastr.error(resultado.mensaje, 'Error');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al agregar equipo', 'Error');
      }
    )
  }

  abrirModalPerson(modalPersona: any, tipo: string) {

    switch (tipo) {
      case "dt":
        this.tituloModalPersona = "Director Técnico";
        this.tipoPersona = tipo;
        break;
      case "at":
        this.tituloModalPersona = "Asistente Técnico";
        this.tipoPersona = tipo;
        break;
      case "pf":
        this.tituloModalPersona = "Preparador Físico";
        this.tipoPersona = tipo;
        break;
      case "jug":
        this.tituloModalPersona = "Jugador";
        this.tipoPersona = tipo;
        break;
      default:
        break;
    }
    this.formPersona.reset();
    this.modalService.open(modalPersona);
  }

  agregarPersona() {
    
    const persona: PersonaDTO = this.formPersona.value;

    switch (this.tipoPersona) {
      case "dt":
        persona.IdRol = 2;
        this.formEquipo.controls["DirectorTecnico"].setValue(persona.NombreApellido);
        break;
      case "at":
        persona.IdRol = 3;
        this.formEquipo.controls["AsistenteTecnico"].setValue(persona.NombreApellido);
        break;
      case "pf":
        persona.IdRol = 4;
        this.formEquipo.controls["PreparadorFisico"].setValue(persona.NombreApellido);
        break;
      case "jug":
        persona.IdRol = 1;
        break;
      default:
        break;
    }

    if (this.tipoPersona == "jug") {
      this.listaJugadores.push(persona);
      this.toastr.success('Se agrego el jugador al equipo', 'Jugador agregado');
    } else {
      this.cuerpoTecnico.push(persona);
    }

    this.modalService.dismissAll();
  }

  agregarJugador(jugador: PersonaDTO) {
    
  }

  editarJugador(modalPersona: any, jugador: PersonaDTO) {
    this.formPersona.patchValue({
      NombreApellido: jugador.NombreApellido,
      NumDocumento: jugador.NumDocumento,
      FechaNacimiento: jugador.FechaNacimiento,
      Telefono: jugador.Telefono,
      Email: jugador.Email
    });
    this.modalService.open(modalPersona);
  }
}
