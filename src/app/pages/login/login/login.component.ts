import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthenticationHttpService, Signin} from '../../../service/authenticationHttp.service';
import {ActivatedRoute, Router} from '@angular/router';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'login-cmp',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  password: string;
  showPassword: boolean;

  constructor(private authService:AuthenticationHttpService, private router: Router, private route: ActivatedRoute) {
    this.showPassword = undefined;
  }

  login(form: NgForm) {
    let login: Signin = {
      email: form.value.email,
      senha: form.value.senha,
    } as Signin;
    this.authService.signin(login).subscribe(
      {
        next: auth => {
          localStorage.setItem('jwtToken', auth.token);
          console.log("token: " + auth.token);

          // Decodifica o token JWT
          const decodedToken: any = jwtDecode(auth.token);

          // Acessa a informação do papel (role) do usuário
          const userRole = decodedToken.role;

          // if (userRole === 'USER') {
          //   this.router.navigate(['rota-para-usuarios-comuns']);
          // } else if (userRole === 'ADMIN') {
          //   this.router.navigate(['rota-para-administradores']);
          // }
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }
}
