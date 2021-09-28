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
      DirectorTecnico: this.directorTecnico,
      AsistenteTecnico: this.asistenteTecnico,
      PreparadorFisico: this.preparadorFisico
    }

    this._equipoService.agregarEquipo(equipo).subscribe(
      resultado => {
        if (resultado.Exito === 0) {
          this.toastr.success(resultado.Mensaje, 'Equipo agregado');
        } else {
          this.toastr.error(resultado.Mensaje, 'Error');
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
      default:
        break;
    }
    this.formPersona.reset();
    this.modalService.open(modalPersona);
  }

  agregarPersona() {
    
    const persona: PersonaDTO = this.formPersona.value;
    console.log(persona.NombreApellido);
    switch (this.tipoPersona) {
      case "dt":
        this.directorTecnico = persona;
        this.formEquipo.controls["DirectorTecnico"].setValue(persona.NombreApellido);
        break;
      case "at":
        this.asistenteTecnico = persona;
        this.formEquipo.controls["AsistenteTecnico"].setValue(persona.NombreApellido);
        break;
      case "pf":
        this.preparadorFisico = persona;
        this.formEquipo.controls["PreparadorFisico"].setValue(persona.NombreApellido);
        break;
      default:
        break;
    }

    console.log(persona);
    this.modalService.dismissAll();
  }

}
