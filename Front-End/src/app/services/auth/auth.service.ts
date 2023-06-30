import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('usuario')!);
    return user !== 'null' ? true : false;
  }
}
