import {TutorHttpService, Tutor} from '../../service/tutorHttp.service';
import {
  Component, OnInit
} from '@angular/core';
import {Router} from '@angular/router';
import {AuthTokenService} from '../../service/authToken.service';

@Component({
  selector: 'tutor-listar-cmp',
  moduleId: module.id,
  templateUrl: 'tutor-listar.component.html'
})

export class ListaTutorComponent implements OnInit {

  constructor(private tutorService: TutorHttpService, private router: Router, public authTokenService:AuthTokenService) {
  }

  public tutoresTableData: Tutor[];
  erro: string

  ngOnInit() {
    this.listarTutor()
  };

  cadastrarTutor() {
    this.router.navigate(['/tutor']);
  }

  listarTutor() {
    this.tutorService.listar().subscribe(
      {
        next: (response: Tutor[]) => {
          this.tutoresTableData = response.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
          });
        },
        error: (err: any) => {
          console.log('ERROR: ' + err)
          alert('ERRO')
          this.erro = err
        },
        complete: function () {
          console.log('Completed');
        }
      }
    )
  }

  deletarTutor(id: number) {
    const confirmacao = confirm('Tem certeza que deseja deletar o tutor?');

    if (confirmacao) {
      this.tutorService.deletar(id).subscribe(
        {
          next: () => {
            console.log('Tutor deletado:');
            this.listarTutor();
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao deletar o tutor.');
            this.erro = err;
          }
        }
      );
    } else {
      console.log('Deleção cancelada pelo usuário.');
    }
  }
}
