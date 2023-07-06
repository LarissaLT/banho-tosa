import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import {Role} from './tutorHttp.service';


@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  public getToken(): string {
    return localStorage.getItem('jwtToken');
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
