import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router: Router) {}

  login(email: string, password: string): void {
    // Aquí debes enviar las credenciales al servidor para su verificación
    // Si las credenciales son válidas, establece loggedIn en true y redirige a la página principal
    this.loggedIn = true;
    this.router.navigate(['/']);
  }

  logout(): void {
    // Aquí debes enviar una solicitud al servidor para cerrar sesión
    // Si la solicitud es exitosa, establece loggedIn en false y redirige a la página de inicio de sesión
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
