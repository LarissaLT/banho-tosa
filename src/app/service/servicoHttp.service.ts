import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Servico{
  id: number,
  nome: string,
  preco: number,
}

@Injectable({
  providedIn: 'root'
})
export class ServicoHttpService {
  private apiUrl = 'http://localhost:8080/api/v1/servicos';

  constructor(private http: HttpClient) { }

  listar() : Observable<Servico[]>{
    return this.http.get<Servico[]>(this.apiUrl, { headers: this.getHeaders() })
  }

  salvar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico, { headers: this.getHeaders() })
  }

  atualizar(servico: Servico): Observable<Servico> {
    const url = `${this.apiUrl}/${servico.id}`;
    return this.http.put<Servico>(url, servico, { headers: this.getHeaders() });
  }

  buscarPorId(id: number): Observable<Servico> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Servico>(url, { headers: this.getHeaders() });
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
