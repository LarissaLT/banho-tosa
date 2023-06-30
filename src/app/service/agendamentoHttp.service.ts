import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cachorro } from 'app/service/cachorroHttp.service';
import { Servico } from './servicoHttp.service';
import { Funcionario } from './funcionarioHttp.service';
import { Tutor } from './tutorHttp.service';

export interface Agendamento{
  id: number,
  data: Date,
  servico: Servico,
  funcionario: Funcionario,
  cachorro: Cachorro,
  tutor: Tutor,
  // pagamento: string
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
    return this.http.get<Agendamento[]>(this.apiUrl,{ headers: this.getHeaders() })
  }

  salvar(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento, { headers: this.getHeaders() })
  }

  atualizar(agendamento: Agendamento): Observable<Agendamento> {
    const url = `${this.apiUrl}/${agendamento.id}`;
    return this.http.put<Agendamento>(url, agendamento, { headers: this.getHeaders() });
  }

  buscarPorId(id: number): Observable<Agendamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Agendamento>(url, { headers: this.getHeaders() });
  }

  deletar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, { headers: this.getHeaders() })
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Add the JWT token to the Authorization header
    });
    return headers;
  }
}


