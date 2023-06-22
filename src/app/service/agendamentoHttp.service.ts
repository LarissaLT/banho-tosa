import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cachorro } from 'app/service/cachorroHttp.service';
import { Servico } from './servicoHttp.service';
import { Funcionario } from './funcionarioHttp.service';
import { Tutor } from './tutorHttp.service';

export interface Agendamento{
  id: number,
  data: String,
  servicos: Servico[],
  funcionario: Funcionario,
  cachorro: Cachorro,
}

export interface DadosFormAgendamento{
  servicos: Servico[],
  funcionarios: Funcionario[],
  cachorros: Cachorro[],
  tutores: Tutor[]
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentoHttpService {

  private apiUrl = 'http://localhost:8080/api/v1/agendamentos';

  constructor(private http: HttpClient) { }

  buscarDadosForm() : Observable<DadosFormAgendamento>{
    return this.http.get<DadosFormAgendamento>(this.apiUrl + '/form')
  }

  listar() : Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(this.apiUrl)
  }

  salvar(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento)
  }

  atualizar(agendamento: Agendamento): Observable<Agendamento> {
    const url = `${this.apiUrl}/${agendamento.id}`;
    return this.http.put<Agendamento>(url, agendamento);
  }

  buscarPorId(id: number): Observable<Agendamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Agendamento>(url);
  }

  deletar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
  }
}


