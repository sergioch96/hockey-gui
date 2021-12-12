import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PersonaDTO } from 'src/app/models/modelsCommon';
import { AutoridadService } from 'src/app/services/autoridad.service';

@Component({
  selector: 'app-gestion-arbitros',
  templateUrl: './gestion-arbitros.component.html',
  styleUrls: ['./gestion-arbitros.component.css']
})
export class GestionArbitrosComponent implements OnInit {

  listaArbitros: PersonaDTO[] = [];
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
          this.listaArbitros = autoridades.filter(x => x.idRol == 5);
        } else {
          this.toastr.error(resultado.mensaje, 'Ocurrió un error al obtener arbitros');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al obtener arbitros', 'Error');
      }
    );
  }

  abrirModalPerson(modalPersona: any) {
    this.tituloModalPersona = "Crear Árbitro";
    this.formPersona.reset();
    this.modalService.open(modalPersona);
  }

  // falta guardar arbitro y modificar arbitro (ver modificar jugador)
  guardarPersona() {
    const persona: PersonaDTO = this.formPersona.value;
    persona.idRol = 5;
    persona.idPersona = persona.idPersona == null ? 0 : persona.idPersona;

    console.log(persona);
    this.modalService.dismissAll();
  }

  editarArbitro(modalPersona: any, arbitro: PersonaDTO) {
    var fecha = arbitro.fechaNacimiento;
    var index = fecha?.indexOf('T');
    if (index != -1)
      var fecha = fecha?.substring(0, index);

    this.formPersona.patchValue({
      idPersona: arbitro.idPersona,
      nombreApellido: arbitro.nombreApellido,
      numDocumento: arbitro.numDocumento,
      fechaNacimiento: fecha,
      telefono: arbitro.telefono,
      email: arbitro.email
    });

    this.tituloModalPersona = "Editar Árbitro";
    this.modalService.open(modalPersona);
  }
}
