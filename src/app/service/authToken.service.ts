import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import {Role} from './tutorHttp.service';
import {Router, RouterModule} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor(private router: Router) {
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  public invalidateToken(): void {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }

  public decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }

  public getUserRole(){
    return this.decodePayloadJWT()['role']
  }

  public getUserId(){
    return this.decodePayloadJWT()['jti']
  }

  public isUserAdmin(){
    return this.getUserRole()===Role.ADMIN
  }
}
