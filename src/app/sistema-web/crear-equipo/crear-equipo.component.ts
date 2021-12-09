import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EquipoDTO, ListaEquiposDTO, PersonaDTO } from 'src/app/models/modelsCommon';
import { EquipoService } from 'src/app/services/equipo.service';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  listaJugadores: PersonaDTO[] = [];
  formEquipo: FormGroup;
  formPersona: FormGroup;
  idEquipo: number = 0;
  idJugador: number | undefined;
  tituloModalPersona: string = "";
  tituloVista: string = "Crear";
  tipoPersona: string = "";
  cuerpoTecnico: PersonaDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private _equipoService: EquipoService,
    private _jugadorService: JugadorService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private _router: ActivatedRoute
  ) { 
    
    this.formEquipo = this.fb.group({
      NombreEquipo: ['', Validators.required],
      DirectorTecnico: [{value: '', disabled: true}, [Validators.required]],
      AsistenteTecnico: [{value: '', disabled: true}, [Validators.required]],
      PreparadorFisico: [{value: '', disabled: true}, [Validators.required]]
    })

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
    let idEquipoParam = this._router.snapshot.paramMap.get('id');
    this.idEquipo = idEquipoParam != null && idEquipoParam != '' ? +idEquipoParam : 0;

    if (this.idEquipo > 0) {
      this.getEquipo(this.idEquipo);
      this.getJugadoresPorEquipo(this.idEquipo);
    }
  }

  getEquipo(idEquipo: number) {
    let equipo: ListaEquiposDTO;
    this._equipoService.getEquipo(idEquipo).subscribe(
      respuesta => {
        if (respuesta.exito === 0) {
          equipo = respuesta.data;
          
          this.formEquipo.patchValue({
            NombreEquipo: equipo.nombreEquipo,
            DirectorTecnico: equipo.directorTecnico,
            AsistenteTecnico: equipo.asistenteTecnico,
            PreparadorFisico: equipo.preparadorFisico,
          });
          document.getElementById('btnAddEquipo')?.classList.add('d-none');

          this.tituloVista = "Editar";
        }
      }, error => {
        this.toastr.error('Ocurrio un error al intentar recuperar el equipo seleccionado');
      }
    );
  }

  getJugadoresPorEquipo(idEquipo: number) {
    this._jugadorService.getJugadoresPorEquipo(idEquipo).subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.listaJugadores = resultado.data;
        }
      }, error => {
        this.toastr.error('Ocurrio un error al intentar recuperar los jugadores del equipo');
      }
    )
  }

  agregarEquipo() {
    const equipo : EquipoDTO = {
      NombreEquipo: this.formEquipo.get('NombreEquipo')?.value,
      CuerpoTecnico: this.cuerpoTecnico
    };
    this._equipoService.agregarEquipo(equipo).subscribe(
      resultado => {
        
        if (resultado.exito === 0) {
          this.idEquipo = resultado.data;
          this.toastr.success(resultado.mensaje, 'Equipo agregado');
          this.formEquipo.get('NombreEquipo')?.disable;
          document.getElementById('btnAddEquipo')?.classList.add('d-none');
        } else {
          this.toastr.error(resultado.mensaje, 'Error');
        }
      }, error => {
        this.toastr.error('Ocurrió un error al agregar equipo', 'Error');
      }
    );
  }

  abrirModalPerson(modalPersona: any, tipo: string) {
    switch (tipo) {
      case "dt":
        this.tituloModalPersona = "Agregar Director Técnico";
        this.tipoPersona = tipo;
        break;
      case "at":
        this.tituloModalPersona = "Agregar Asistente Técnico";
        this.tipoPersona = tipo;
        break;
      case "pf":
        this.tituloModalPersona = "Agregar Preparador Físico";
        this.tipoPersona = tipo;
        break;
      case "jug":
        this.tituloModalPersona = "Agregar Jugador";
        this.tipoPersona = tipo;
        break;
      default:
        break;
    }
    this.formPersona.reset();
    this.modalService.open(modalPersona);
  }

  guardarPersona() {
    const persona: PersonaDTO = this.formPersona.value;

    switch (this.tipoPersona) {
      case "dt":
        persona.idRol = 2;
        this.formEquipo.controls["DirectorTecnico"].setValue(persona.nombreApellido);
        break;
      case "at":
        persona.idRol = 3;
        this.formEquipo.controls["AsistenteTecnico"].setValue(persona.nombreApellido);
        break;
      case "pf":
        persona.idRol = 4;
        this.formEquipo.controls["PreparadorFisico"].setValue(persona.nombreApellido);
        break;
      case "jug":
        persona.idRol = 1;
        persona.idEquipo = this.idEquipo;
        break;
      default:
        break;
    }

    if (this.tipoPersona == "jug") {
      this.guardarJugador(persona);
    } else {
      this.toastr.success('Miembro del cuerpo técnico agregado correctamente', 'Éxito');
      persona.idPersona = 0;
      this.cuerpoTecnico.push(persona);
    }

    this.modalService.dismissAll();
  }

  guardarJugador(jugador: PersonaDTO) {
    jugador.idPersona = jugador.idPersona == null ? 0 : jugador.idPersona;
    
    this._jugadorService.guardarJugador(jugador).subscribe(
      resultado => {
        if (resultado.exito === 0) {
          this.getJugadoresPorEquipo(this.idEquipo);
          
          if (jugador.idPersona)
            this.toastr.success('Se actualizo datos del jugador', 'Jugador actualizado');
          else
            this.toastr.success('Se agrego jugador al equipo', 'Jugador agregado');
        }
      }, error => {
        this.toastr.error('Ocurrio un error al guardar datos del jugador');
      }
    )
  }

  editarJugador(modalPersona: any, jugador: PersonaDTO) {
    var fecha = jugador.fechaNacimiento;
    var index = fecha?.indexOf('T');
    if (index != -1)
      var fecha = fecha?.substring(0, index);

    this.formPersona.patchValue({
      idPersona: jugador.idPersona,
      nombreApellido: jugador.nombreApellido,
      numDocumento: jugador.numDocumento,
      fechaNacimiento: fecha,
      telefono: jugador.telefono,
      email: jugador.email
    });

    this.tituloModalPersona = "Editar Jugador";
    this.tipoPersona = "jug";
    this.modalService.open(modalPersona);
  }
}
