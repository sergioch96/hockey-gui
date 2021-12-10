import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from 'src/app/login/login.component';
import { Usuario } from 'src/app/models/modelsLogin';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hockey-gui';

  usuario: Usuario | undefined;

  constructor(
    private modalService: NgbModal,
    public apiauthService: ApiauthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.apiauthService.usuario.subscribe(res => {
      this.usuario = res;
    });
  }

  ngOnInit(): void {
    if (!this.apiauthService.isAuthenticated()) {
      
      if (!document.body.classList.contains('sb-sidenav-toggled')) {
        console.log('entro');
        this.sidebar();
      }
    }
  }

  abrirLogin() {
    this.modalService.open(LoginComponent);
  }

  sidebar() {
    document.body.classList.toggle('sb-sidenav-toggled');
  }

  logout() {
    this.apiauthService.logout();
    this.router.navigate(['/home']);
    this.toastr.info('Sesión finalizada exitosamente', 'Cerrar Sesión');
    if (!document.body.classList.contains('sb-sidenav-toggled')) {
      this.sidebar();
    }
  }
}
