import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cachorro } from './cachorroHttp.service';

export interface Tutor{
  id: number,
  nome: string,
  celular: number,
  email: string,
  endereco: string,
  cachorros: Cachorro[]
}

@Injectable({
  providedIn: 'root'
})
export class TutorHttpService {

  private apiUrl = 'http://localhost:8080/api/v1/tutores';

  constructor(private http: HttpClient) { }

  listar() : Observable<Tutor[]>{
    return this.http.get<Tutor[]>(this.apiUrl)
  }

  salvar(tutor: Tutor): Observable<Tutor> {
    return this.http.post<Tutor>(this.apiUrl, tutor)
  }

  atualizar(tutor: Tutor): Observable<Tutor> {
    const url = `${this.apiUrl}/${tutor.id}`;
    return this.http.put<Tutor>(url, tutor);
  }

  buscarPorId(id: number): Observable<Tutor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Tutor>(url);
  }

  deletar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
  }
}
