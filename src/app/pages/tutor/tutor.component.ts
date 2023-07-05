import { Component, OnInit } from '@angular/core';
import { Tutor, TutorHttpService } from 'app/service/tutorHttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {AuthTokenService} from '../../service/authToken.service';

@Component({
    selector: 'tutor-cmp',
    moduleId: module.id,
    templateUrl: 'tutor.component.html'
})

export class TutorComponent implements OnInit{
  erro: string;
  tutor: Tutor = {} as Tutor;

  constructor(
    private tutorService: TutorHttpService, private router: Router, private route: ActivatedRoute,private tokenService:AuthTokenService) { }

  ngOnInit() {
    const idTutor = this.route.snapshot.params['id'];
console.log(this.tokenService.isUserAdmin)
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
            this.router.navigate(['tutor-listar']);
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
            this.router.navigate(['tutor-listar']);
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao salvar o tutor.');
            this.erro = err;
          }
        }
      );
    }

    salvarOuAtualizar(form: NgForm){
      let tutor = this.tutor

      console.log(this.tutor)

      if(tutor.id){
        this.atualizarTutor(tutor)
        return
      }
      this.salvarTutor(tutor)
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
}
