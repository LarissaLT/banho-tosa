import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Signin {
  email: string,
  senha: string,
}

export interface Signup{
  id: string,
  nome: string,
  email: string,
  senha: string,
}

export interface Auth{
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  signin(login: Signin): Observable<Auth> {
    console.log(login)
    return this.http.post<Auth>(this.apiUrl + '/signin', login)
  }

  signup(signup: Signup): Observable<Auth> {
    console.log(signup)
    return this.http.post<Auth>(this.apiUrl + '/signup', signup)
  }


}
