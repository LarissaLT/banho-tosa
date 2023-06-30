import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Funcionario {
  id: number,
  nome: string,
}

@Injectable({
  providedIn: 'root'
})

export class FuncionarioHttpService {
  private apiUrl = 'http://localhost:8080/api/v1/funcionarios';

  constructor(private http: HttpClient) { }

  listar() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  salvar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario, { headers: this.getHeaders() });
  }

  atualizar(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.apiUrl}/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario, { headers: this.getHeaders() });
  }

  buscarPorId(id: number): Observable<Funcionario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Funcionario>(url, { headers: this.getHeaders() });
  }

  deletar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}` // Add the JWT token to the Authorization header
    });
    return headers;
  }

}
