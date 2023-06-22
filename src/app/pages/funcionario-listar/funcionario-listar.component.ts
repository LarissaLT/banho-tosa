import { Component, OnInit } from '@angular/core';
import { FuncionarioHttpService, Funcionario } from 'app/service/funcionarioHttp.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'funcionario-listar-cmp',
    moduleId: module.id,
    templateUrl: 'funcionario-listar.component.html'
})

export class ListaFuncionarioComponent implements OnInit{

  constructor(private funcionarioService : FuncionarioHttpService, private route: ActivatedRoute, private router: Router){}

    public funcionariosTableData: Funcionario[];
    erro: string;
    funcionario: Funcionario;

    ngOnInit() {
      this.listarFuncionario();
    }

  listarFuncionario(){
//loadin
    this.funcionarioService.listar().subscribe(
      {
        next: (response:Funcionario[]) => {this.funcionariosTableData=response},
        error: (err: any) => {
          console.log('ERROR: '+err)
          alert("deu merda")
          this.erro=err
        },
        complete:function() { console.log('Completed'); }
      }
     )
  }


  deletarFuncionario(id: number) {
    const confirmacao = confirm("Tem certeza que deseja deletar o funcionário?");

    if (confirmacao) {
      this.funcionarioService.deletar(id).subscribe(
        {
          next:() => {
            console.log('Funcionário deletado:');
            this.listarFuncionario();
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao deletar o funcionário.');
            this.erro = err;
          }
        }
      );
    } else {
      console.log('Deleção cancelada pelo usuário.');
    }
  }
}

