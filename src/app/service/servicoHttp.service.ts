import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Servico[]>(this.apiUrl)
  }

  salvar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico)
  }

  atualizar(servico: Servico): Observable<Servico> {
    const url = `${this.apiUrl}/${servico.id}`;
    return this.http.put<Servico>(url, servico);
  }

  buscarPorId(id: number): Observable<Servico> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Servico>(url);
  }

  deletar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
  }

}
