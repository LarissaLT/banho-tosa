import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cachorro } from './cachorroHttp.service';

export interface Cliente{
  id: number,
  nome: string,
  celular: number,
  email: string,
  senha: string,
  endereco: string,
  cachorros: Cachorro[]
}

@Injectable({
  providedIn: 'root'
})
export class CadastroHttpService {

  private apiUrl = 'http://localhost:8080/api/v1/tutores';

  constructor(private http: HttpClient) { }

  listar() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl)
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente)
  }
}
