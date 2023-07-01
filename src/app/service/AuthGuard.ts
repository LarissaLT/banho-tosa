import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('jwtToken');
  console.log(token)
    if (token) {
      const decodedToken = this.decodeJwtToken(token);
      console.log(this.isTokenExpired(decodedToken))
      if (this.isTokenExpired(decodedToken)) {
        // Token expirado, redirecionar para a página de login
        this.router.navigate(['/login']);
        return false;
      }

      // Token válido, permitir acesso à rota
      return true;
    }

    // Token não encontrado, redirecionar para a página de login
    this.router.navigate(['/login']);
    return false;
  }

  private decodeJwtToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Failed to decode JWT token:', error);
      return null;
    }
  }

  private isTokenExpired(decodedToken: any): boolean {
    if (!decodedToken || !decodedToken.exp) {
      return true;
    }

    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  }
}
