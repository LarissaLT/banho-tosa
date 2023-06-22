import { Servico } from '../../service/servicoHttp.service';
import { Component, OnInit } from '@angular/core';
import { ServicoHttpService } from 'app/service/servicoHttp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'servico-cmp',
    moduleId: module.id,
    templateUrl: 'servico.component.html'
})

export class ServicoComponent implements OnInit{
  erro: string;
  servico: Servico = {} as Servico;

  constructor(
    private servicoService: ServicoHttpService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(){
      const idServico = this.route.snapshot.params['id'];

      console.log(idServico)

      if (idServico) {
         this.buscarServico(idServico);
      }
    }

    salvarServico(servico: Servico) {
      this.servicoService.salvar(servico).subscribe(
        {
          next: (servicoSalvo: Servico) => {
            console.log('Serviço salvo:', servicoSalvo);
            this.router.navigate(['servico-listar']);
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao salvar o serviço.');
            this.erro = err;
          }
        }
      );
    }

    atualizarServico(servico: Servico) {
      this.servicoService.atualizar(servico).subscribe(
        {
          next: (servicoSalvo: Servico) => {
            console.log('Serviço salvo:', servicoSalvo);
            this.router.navigate(['servico-listar']);
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao salvar o serviço.');
            this.erro = err;
          }
        }
      );
    }

    salvarOuAtualizar(form: NgForm){
      let servico = this.servico

      console.log(servico)

      if(servico.id){
        this.atualizarServico(servico)
        return
      }
      this.salvarServico(servico)
    }

  buscarServico(id: number) {
    this.servicoService.buscarPorId(id).subscribe({
      next: (servico: Servico) => {
        this.servico = servico;
      },
      error: (error: any) => {
        console.error('Erro ao buscar serviço:', error);
        alert('Ocorreu um erro ao buscar o serviço.');
        this.erro = error;
      }
    });
  }
}
