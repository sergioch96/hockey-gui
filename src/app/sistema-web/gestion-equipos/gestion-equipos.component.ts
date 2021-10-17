import { Component, OnInit } from '@angular/core';
import { EQUIPO } from 'src/app/datos-prueba/datos.json';

@Component({
  selector: 'app-gestion-equipos',
  templateUrl: './gestion-equipos.component.html',
  styleUrls: ['./gestion-equipos.component.css']
})
export class GestionEquiposComponent implements OnInit {

  listaEquipos = EQUIPO;

  constructor() { }

  ngOnInit(): void {
  }

}
