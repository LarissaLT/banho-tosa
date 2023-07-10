import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationHttpService, Signup} from '../../../service/authenticationHttp.service';
import {NgForm} from '@angular/forms';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'cadastro-cmp',
  moduleId: module.id,
  templateUrl: 'cadastro.component.html',
  styleUrls: ['cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  password: string;
  showPassword: boolean;

  erro: string;
  signup: Signup = {} as Signup;
  token: string;

  constructor(
    private authenticationService: AuthenticationHttpService, private router: Router, private route: ActivatedRoute,
    private toastr: ToastrService) {

    this.showPassword = undefined;
  }

  ngOnInit() {
  }

  cadastrarTutor(formCadastro: NgForm) {
    console.log(this.signup);
    this.authenticationService.signup(this.signup).subscribe({
      next: (cadastroSalvo: any) => {
        console.log('Tutor salvo:', cadastroSalvo);
        this.authenticationService.signin(this.signup).subscribe({
          next: (auth: any) => {
            this.token = auth.token;
            console.log('Token:', this.token);
            localStorage.setItem('jwtToken', this.token);
            this.router.navigate(['/agendamento']);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      },
      error: (err: any) => {
        console.log('ERROR:', err);
        alert('Ocorreu um erro ao salvar o tutor.');
        this.erro = err;
      }
    });
  }

  showNotificationSuccess(from: string, align: string) {
    const notificationOptions = {
      timeOut: 100000,
      closeButton: true,
      enableHtml: true,
      positionClass: `toast-${from}-${align}`
    };

    this.toastr.success('<span data-notify="icon" class="nc-icon nc-bookmark-2"></span><span data-notify="message">Cadastro Salvo!<br><b>Complete o seu perfil.</b></span>', '', {
      ...notificationOptions,
      toastClass: 'alert alert-success alert-with-icon'
    });
  }
}
