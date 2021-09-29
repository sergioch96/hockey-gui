import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiauthService } from '../services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  });

  constructor(
    public modal: NgbActiveModal,
    public apiauthService: ApiauthService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
   }

  ngOnInit(): void {
  }

  login() {
    this.apiauthService.login(this.loginForm.value).subscribe( response => {
      if (response.exito === 0) {
        this.modal.close();
        this.toastr.success('Sesión iniciada exitosamente', 'Iniciar Sesión');
        //this.router.navigate(['/menu']);
        document.body.classList.toggle('sb-sidenav-toggled');
      } else {
        this.toastr.error(response.mensaje, 'Error');  
      }
    }, error => {
      this.toastr.error('Ocurrió un error al intentar iniciar sesión', 'Error');
    })
  }

}
