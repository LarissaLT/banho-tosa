import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Agendamento, AgendamentoHttpService, DadosFormAgendamento} from 'app/service/agendamentoHttp.service';
import flatpickr from 'flatpickr';


@Component({
  selector: 'agendamento-cmp',
  moduleId: module.id,
  templateUrl: 'agendamento.component.html',
})

export class AgendamentoComponent implements OnInit,AfterViewInit {
  agendamento: Agendamento = {} as Agendamento;
  dadosFormAgendamento: DadosFormAgendamento = {} as DadosFormAgendamento

  erro: string;
  date: Date

  constructor(
    private agendamentoService: AgendamentoHttpService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.buscarDadosForm()

    const idAgendamento = this.route.snapshot.params['id'];

    console.log(idAgendamento)

    if (idAgendamento) {
      this.buscarAgendamento(idAgendamento);
    }
  }
  ngAfterViewInit() {
    flatpickr('#datepicker', {
      // Flatpickr configuration options
      // For example:
      dateFormat: 'Y-m-d',
      minDate: 'today'
    });
  }
  salvarAgendamento(agendamento: Agendamento) {
    this.agendamentoService.salvar(agendamento).subscribe(
      {
        next: (agendamentoSalvo: Agendamento) => {
          console.log('Agendamento salvo:', agendamentoSalvo);
          this.router.navigate(['agendamento-listar']);
        },
        error: (err: any) => {
          console.log('ERROR:', err);
          alert('Ocorreu um erro ao salvar o agendamento.');
          this.erro = err;
        }
      }
    );
  }

  atualizarAgendamento(agendamento: Agendamento) {
    this.agendamentoService.atualizar(agendamento).subscribe(
      {
        next: (agendamentoSalvo: Agendamento) => {
          console.log('Agendamento salvo:', agendamentoSalvo);
          this.router.navigate(['agendamento-listar']);
        },
        error: (err: any) => {
          console.log('ERROR:', err);
          alert('Ocorreu um erro ao salvar o agendamento.');
          this.erro = err;
        }
      }
    );
  }

  salvarOuAtualizar(form: NgForm) {
    const agendamento = this.agendamento
    console.log(agendamento)

    if (agendamento.id) {
      this.atualizarAgendamento(agendamento)
      return
    }
    this.salvarAgendamento(agendamento)
  }

  buscarAgendamento(id: number) {
    this.agendamentoService.buscarPorId(id).subscribe({
      next: (agendamento: Agendamento) => {
        this.agendamento = agendamento;
      },
      error: (error: any) => {
        console.error('Erro ao buscar agendamento:', error);
        alert('Ocorreu um erro ao buscar o agendamento.');
        this.erro = error;
      }
    });
  }

  buscarDadosForm() {
    this.agendamentoService.buscarDadosForm().subscribe({
      next: (dados: DadosFormAgendamento) => {
        this.dadosFormAgendamento = dados;
      },
      error: (error: any) => {
        console.error('Erro ao buscar agendamento:', error);
        alert('Ocorreu um erro ao buscar o agendamento.');
        this.erro = error;
      },
    });
  }
}

