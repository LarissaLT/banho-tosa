import { Component, OnInit } from '@angular/core';
import { Funcionario, FuncionarioHttpService } from 'app/service/funcionarioHttp.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'funcionario-cmp',
    moduleId: module.id,
    templateUrl: 'funcionario.component.html'
})

export class FuncionarioComponent implements OnInit {
  erro: string;
  funcionario: Funcionario = {}as Funcionario;

  constructor(
    private funcionarioService: FuncionarioHttpService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const idFuncionario = this.route.snapshot.params['id'];

    console.log(idFuncionario)

      if (idFuncionario) {
        this.buscarFuncionario(idFuncionario);
      }
  }

  salvarFuncionario(funcionario : Funcionario) {
      this.funcionarioService.salvar(funcionario).subscribe(
        {
          next: (funcionarioSalvo: Funcionario) => {
            console.log('Funcionário salvo:', funcionarioSalvo);
            this.router.navigate(['funcionario-listar']);
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao salvar o funcionário.');
            this.erro = err;
          }
        }
      );
    }

    atualizarFuncionario(funcionario: Funcionario) {
        this.funcionarioService.atualizar(funcionario).subscribe(
          {
            next: (funcionarioSalvo: Funcionario) => {
              console.log('Funcionário salvo:', funcionarioSalvo);
              this.router.navigate(['funcionario-listar']);
            },
            error: (err: any) => {
              console.log('ERROR:', err);
              alert('Ocorreu um erro ao salvar o funcionário.');
              this.erro = err;
            }
          }
        );
      }

      salvarOuAtualizar(form: NgForm){
        let funcionario = this.funcionario

        console.log(funcionario)

        if(funcionario.id){
          this.atualizarFuncionario(funcionario)
          return
        }
        this.salvarFuncionario(funcionario)
      }

    buscarFuncionario(id: number) {
      this.funcionarioService.buscarPorId(id).subscribe({
        next: (funcionario: Funcionario) => {
          this.funcionario = funcionario;
        },
        error: (error: any) => {
          console.error('Erro ao buscar funcionário:', error);
          alert('Ocorreu um erro ao buscar o funcionário.');
          this.erro = error;
        }
      });
    }

}
