import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PROXIMOS_ENCUENTROS, TABLA_POSICIONES } from 'src/app/datos-prueba/datos.json';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabla = TABLA_POSICIONES;

  encuentros = PROXIMOS_ENCUENTROS;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  abrirLogin() {
    this.modalService.open(LoginComponent);
  }
}
