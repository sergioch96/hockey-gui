import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
    private fb: FormBuilder
  ) {
   }

  ngOnInit(): void {
  }

  login() {
    this.apiauthService.login(this.loginForm.value).subscribe( response => {
      if (response.Exito === 0) {
        this.modal.close();
        this.router.navigate(['/menu']);
        document.body.classList.toggle('sb-sidenav-toggled');
      }
    })
  }

}
