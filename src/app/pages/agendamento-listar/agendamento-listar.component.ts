import {Component, OnInit} from '@angular/core';
import {Agendamento, AgendamentoHttpService} from '../../service/agendamentoHttp.service';
import {AuthTokenService} from '../../service/authToken.service';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'agendamento-listar-cmp',
  moduleId: module.id,
  templateUrl: 'agendamento-listar.component.html'
})
export class ListaAgendamentoComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoHttpService, public authTokenService: AuthTokenService, private router: Router) {
  }

  public agendamentosTableData: Agendamento[];
  erro: string

  ngOnInit() {
    this.listarAgendamento()
  };

  cadastrarAgendamento() {
    this.router.navigate(['/agendamento']);
  }

  listarAgendamento() {
    //loadin
    this.agendamentoService.listar().subscribe(
      {
        next: (response: Agendamento[]) => {
          this.agendamentosTableData = response.sort((a, b) => {
            const dataA = this.formatarData(a.data);
            const dataB = this.formatarData(b.data);
            return dataA.localeCompare(dataB);
          });
          console.log(response);
        },
        error: (err: any) => {
          console.log('ERROR: ' + err)
          alert('deu merda')
          this.erro = err
        },
        complete: function () {
          console.log('Completed');
        }
      }
    )
  }

  deletarAgendamento(id: number) {
    const confirmacao = confirm('Tem certeza que deseja deletar o agendamento?');

    if (confirmacao) {
      this.agendamentoService.deletar(id).subscribe(
        {
          next: () => {
            console.log('Agendamento deletado:');
            this.listarAgendamento();
          },
          error: (err: any) => {
            console.log('ERROR:', err);
            alert('Ocorreu um erro ao deletar o agendamento.');
            this.erro = err;
          }
        }
      );
    } else {
      console.log('Deleção cancelada pelo usuário.');
    }
  }

  formatarData(data: Date): string {
    return moment(data).format('DD/MM/YYYY');
  }

}
