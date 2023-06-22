import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CachorroHttpService, Genero, Porte } from 'app/service/cachorroHttp.service';

interface Cachorro {
  id: number;
  nome: string;
  raca: string;
  idade: number;
  porte: string;
  genero: string;
}

@Component({
  selector: 'app-cachorro',
  templateUrl: './cachorro.component.html',
})
export class CachorroComponent implements OnInit {
  cachorro: Cachorro = {} as Cachorro;
  portes: string[] = Object.values(Porte);
  generos: string[] = Object.values(Genero);

  erro: string;

  constructor(private cachorroService: CachorroHttpService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(){
      const idCachorro = this.route.snapshot.params['id'];

    console.log(idCachorro)

      if (idCachorro) {
        this.buscarCachorro(idCachorro);
      }

    }

    salvarCachorro(cachorro: Cachorro) {
         this.cachorroService.salvar(cachorro).subscribe(
           {
             next: (cachorroSalvo: Cachorro) => {
               console.log('Cachorro salvo:', cachorroSalvo);
               this.router.navigate(['cachorro-listar']);
             },
             error: (err: any) => {
               console.log('ERROR:', err);
               alert('Ocorreu um erro ao salvar o cachorro.');
               this.erro = err;
             }
           }
         );
       }

       atualizarCachorro(cachorro: Cachorro) {
        this.cachorroService.atualizar(cachorro).subscribe(
          {
            next: (cachorroSalvo: Cachorro) => {
              console.log('Cachorro salvo:', cachorroSalvo);
              this.router.navigate(['cachorro-listar']);
            },
            error: (err: any) => {
              console.log('ERROR:', err);
              alert('Ocorreu um erro ao salvar o cachorro.');
              this.erro = err;
            }
          }
        );
      }

      salvarOuAtualizar(form: NgForm){
        let porteKey = Object.keys(Porte)
        .find((key) => Porte[key] === form.value.porte);


      let generoKey = Object.keys(Genero)
        .find((key) => Genero[key] === form.value.genero);

      let cachorro = {
       id:this.cachorro.id,
       nome:form.value.nome,
       raca: form.value.raca,
       idade: form.value.idade,
       porte: porteKey,
       genero: generoKey
     } as Cachorro

        console.log(cachorro)

        if(cachorro.id){
          this.atualizarCachorro(cachorro)
          return
        }
        this.salvarCachorro(cachorro)
      }

    buscarCachorro(id: number) {
      this.cachorroService.buscarPorId(id).subscribe({
        next: (cachorro: Cachorro) => {
          this.cachorro = cachorro;
          this.cachorro.porte=Porte[cachorro.porte]
          this.cachorro.genero = Genero[cachorro.genero]
        },
        error: (error: any) => {
          console.error('Erro ao buscar cachorro:', error);
          alert('Ocorreu um erro ao buscar o cachorro.');
          this.erro = error;
        }
      });
    }

}
