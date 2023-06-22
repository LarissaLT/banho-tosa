import { ServicoHttpService, Servico } from '../../service/servicoHttp.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'servico-listar-cmp',
    moduleId: module.id,
    templateUrl: 'servico-listar.component.html'
})

export class ListaServicoComponent implements OnInit{

  constructor(private servicoService: ServicoHttpService){}

    public servicosTableData: Servico[];
    erro: string

    ngOnInit(){
        this.listarServico()
  };
  listarServico(){
    //loadin
        this.servicoService.listar().subscribe(
          {
            next: (response:Servico[]) => {this.servicosTableData=response},
            error: (err: any) => {
              console.log('ERROR: '+err)
              alert("deu merda")
              this.erro=err
            },
            complete:function() { console.log('Completed'); }
          }
         )
      }

      deletarServico(id: number) {
        const confirmacao = confirm("Tem certeza que deseja deletar o serviço?");

        if (confirmacao) {
          this.servicoService.deletar(id).subscribe(
            {
              next:() => {
                console.log('Serviço deletado:');
                this.listarServico();
              },
              error: (err: any) => {
                console.log('ERROR:', err);
                alert('Ocorreu um erro ao deletar o serviço.');
                this.erro = err;
              }
            }
          );
        } else {
          console.log('Deleção cancelada pelo usuário.');
        }
      }
}
