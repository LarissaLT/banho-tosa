import {Component, OnInit} from '@angular/core';
import {Role, Tutor, TutorHttpService} from 'app/service/tutorHttp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthTokenService} from '../../service/authToken.service';
import {Genero} from '../../service/cachorroHttp.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'tutor-cmp',
  moduleId: module.id,
  templateUrl: 'tutor.component.html'
})

export class TutorComponent implements OnInit {
  erro: string;
  tutor: Tutor = {} as Tutor;
  roles: string[] = Object.values(Role);

  constructor(
    private tutorService: TutorHttpService, private router: Router, private route: ActivatedRoute,
    public authTokenService: AuthTokenService, private toastr: ToastrService) {
  }

  ngOnInit() {
    const idTutor = this.route.snapshot.params['id'];
    console.log(this.authTokenService.isUserAdmin)
    console.log(idTutor)

    if (idTutor) {
      this.buscarTutor(idTutor);
    }
  }

  salvarTutor(tutor: Tutor) {
    this.tutorService.salvar(tutor).subscribe(
      {
        next: (tutorSalvo: Tutor) => {
          console.log('Tutor salvo:', tutorSalvo);
        },
        error: (err: any) => {
          console.log('ERROR:', err);
          alert('Ocorreu um erro ao salvar o tutor.');
          this.erro = err;
        }
      }
    );
  }

  atualizarTutor(tutor: Tutor) {
    this.tutorService.atualizar(tutor).subscribe(
      {
        next: (tutorSalvo: Tutor) => {
          console.log('Tutor salvo:', tutorSalvo);
        },
        error: (err: any) => {
          console.log('ERROR:', err);
          alert('Ocorreu um erro ao salvar o tutor.');
          this.erro = err;
        }
      }
    );
  }

  salvarOuAtualizar(form: NgForm) {
    let roleKey = Object.keys(Role)
      .find((key) => Role[key] === form.value.role);

    let tutor = {
      id: this.tutor.id,
      nome: form.value.nome,
      celular: form.value.celular,
      email: form.value.email,
      role: roleKey ? roleKey : this.tutor.role, // o campo role escondido (isAdmin) estava vindo null
    } as Tutor;

    console.log(this.tutor);

    if (tutor.id) {
      this.atualizarTutor(tutor);
    } else {
      this.salvarTutor(tutor);
    }

    if (this.authTokenService.isUserAdmin()) {
      this.router.navigate(['/tutor-listar']);
    }
  }

  buscarTutor(id: number) {
    this.tutorService.buscarPorId(id).subscribe({
      next: (tutor: Tutor) => {
        this.tutor = tutor;
      },
      error: (error: any) => {
        console.error('Erro ao buscar tutor:', error);
        alert('Ocorreu um erro ao buscar o tutor.');
        this.erro = error;
      }
    });
  }

  showNotificationSuccess(from: string, align: string) {
    const notificationOptions = {
      timeOut: 2000,
      closeButton: true,
      enableHtml: true,
      positionClass: "toast-" + from + "-" + align
    };

    this.toastr.success('<span data-notify="icon" class="nc-icon nc-refresh-69"></span><span data-notify="message">Perfil Atualizado!</b></span>', '', {
      ...notificationOptions,
      toastClass: 'alert alert-warning alert-with-icon'
    });
  }
}
