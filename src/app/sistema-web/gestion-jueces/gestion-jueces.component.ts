import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PersonaDTO } from 'src/app/models/modelsCommon';
import { AutoridadService } from 'src/app/services/autoridad.service';

@Component({
  selector: 'app-gestion-jueces',
  templateUrl: './gestion-jueces.component.html',
  styleUrls: ['./gestion-jueces.component.css']
})
export class GestionJuecesComponent implements OnInit {

  listaJueces: PersonaDTO[] = [];
  formPersona: FormGroup;
  tituloModalPersona: string = "";

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private _autoridadService: AutoridadService,
    private toastr: ToastrService,
  ) {
    this.formPersona = this.fb.group({
      idPersona: [''],
      nombreApellido: ['', Validators.required],
      numDocumento: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      telefono: [''],
      email: ['']
    })
   }

  ngOnInit(): void {
    this.obtenerAutoridades();
  }

  obtenerAutoridades() {
    this._autoridadService.obtenerAutoridades().subscribe(
      resultado => {
        if (resultado.exito === 0) {
          let autoridades: PersonaDTO[] = resultado.data;
          this.listaJueces = autoridades.filter(x => x.idRol == 6);
        } else {
          this.toastr.error(resultado.mensaje, 'Ocurrió un error al obtener jueces');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al obtener jueces', 'Error');
      }
    );
  }

  abrirModalPerson(modalPersona: any) {
    this.tituloModalPersona = "Crear Juez de Mesa";
    this.formPersona.reset();
    this.modalService.open(modalPersona);
  }

  // falta guardar juez y modificar juez (ver modificar jugador)
  guardarPersona() {
    const persona: PersonaDTO = this.formPersona.value;
    persona.idRol = 5;
    persona.idPersona = persona.idPersona == null ? 0 : persona.idPersona;

    console.log(persona);
    this.modalService.dismissAll();
  }

  editarJuez(modalPersona: any, juez: PersonaDTO) {
    var fecha = juez.fechaNacimiento;
    var index = fecha?.indexOf('T');
    if (index != -1)
      var fecha = fecha?.substring(0, index);

    this.formPersona.patchValue({
      idPersona: juez.idPersona,
      nombreApellido: juez.nombreApellido,
      numDocumento: juez.numDocumento,
      fechaNacimiento: fecha,
      telefono: juez.telefono,
      email: juez.email
    });

    this.tituloModalPersona = "Editar Juez de Mesa";
    this.modalService.open(modalPersona);
  }

}
