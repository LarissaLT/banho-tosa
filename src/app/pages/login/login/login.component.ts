import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthenticationHttpService, Signin} from '../../../service/authenticationHttp.service';


@Component({
  selector: 'login-cmp',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  password: string;
  showPassword: boolean;

  constructor(private authService:AuthenticationHttpService) {
    this.showPassword = undefined;
  }

  login(form: NgForm){
    let login: Signin = {
      email: form.value.email,
      senha: form.value.senha,
    } as Signin;
    this.authService.signin(login).subscribe(
      {
        next: auth => {
          localStorage.setItem('jwtToken', auth.token);
          console.log("token: "+ auth.token)
        },
        error: err => {
          console.log(err)
        }
      }
    )
  }
}
