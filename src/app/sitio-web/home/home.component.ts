import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GOLEADOR, PROXIMOS_ENCUENTROS, TABLA_POSICIONES, TARJETA } from 'src/app/datos-prueba/datos.json';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabla = TABLA_POSICIONES;
  goleadores = GOLEADOR;
  encuentros = PROXIMOS_ENCUENTROS;
  tarjetas = TARJETA;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirLogin() {
    this.modalService.open(LoginComponent);
  }
}
