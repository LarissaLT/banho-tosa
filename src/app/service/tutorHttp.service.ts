import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cachorro } from './cachorroHttp.service';

export interface Tutor{
  id: number,
  nome: string,
  role: string,
  celular: number,
  email: string,
  senha: string,
  endereco: string,
  cachorros: Cachorro[]
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN"
}

@Injectable({
  providedIn: 'root'
})
export class TutorHttpService {

  private apiUrl = 'http://localhost:8080/api/v1/tutores';

  constructor(private http: HttpClient) { }

  listar() : Observable<Tutor[]>{
    return this.http.get<Tutor[]>(this.apiUrl, { headers: this.getHeaders() })
  }

  salvar(tutor: Tutor): Observable<Tutor> {
    return this.http.post<Tutor>(this.apiUrl, tutor, { headers: this.getHeaders() })
  }

  atualizar(tutor: Tutor): Observable<Tutor> {
    const url = `${this.apiUrl}/${tutor.id}`;
    return this.http.put<Tutor>(url, tutor, { headers: this.getHeaders() });
  }

  buscarPorId(id: number): Observable<Tutor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Tutor>(url, { headers: this.getHeaders() });
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
