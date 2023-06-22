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
    return this.http.get<Funcionario[]>(this.apiUrl)
  }

  salvar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario)
  }

  atualizar(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.apiUrl}/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }

  buscarPorId(id: number): Observable<Funcionario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Funcionario>(url);
  }

  deletar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
  }

}
