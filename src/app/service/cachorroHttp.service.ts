import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Cachorro {
  id: number;
  nome: string;
  raca: string;
  idade: number;
  porte: string;
  genero: string;
}

export enum Porte {
  PEQUENO = "Pequeno",
  MEDIO = "Médio",
  GRANDE = "Grande"
}

export enum Genero {
  MACHO = "Macho",
  FEMEA = "Fêmea"
}

@Injectable({
  providedIn: 'root'
})
export class CachorroHttpService {

  private apiUrl = 'http://localhost:8080/api/v1/cachorros';
  cachorros: Cachorro[] = []

  constructor(private http: HttpClient) { }

  listar() : Observable<Cachorro[]>{
    return this.http.get<Cachorro[]>(this.apiUrl)
  }

  salvar(cachorro: Cachorro): Observable<Cachorro> {
    console.log(cachorro)
    return this.http.post<Cachorro>(this.apiUrl, cachorro)
  }

  atualizar(cachorro: Cachorro): Observable<Cachorro> {
    const url = `${this.apiUrl}/${cachorro.id}`;
    return this.http.put<Cachorro>(url, cachorro);
  }

  buscarPorId(id: number): Observable<Cachorro> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cachorro>(url);
  }

  deletar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
  }
}

