import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  async login(email: string, password: string) {
    const res = await this.api.post<{ token: string; user: User }>('/auth/login', { email, password });
    this.setConnectedName(res.user.firstname + " " + res.user.lastname);
    this.setTokenString(res.token);
    return res.user;
  }

  logout() {
    this.setConnectedName("");
    this.setTokenString("");
  }

  async isLoggedIn() {
    try {
      const res: any = await this.api.get('/auth/isLoggedIn');
        this.setTokenString(res.token)
        return res.loggedIn;

    } catch {
      return false;
    }
  }
  //Localstorage front pour actualiser et envoyer le token
  setConnectedName(val: string) {
    localStorage.setItem("connectedName", val);
  }
  getConnectedName() {
    return localStorage.getItem("connectedName") || "";
  }
  setTokenString(val: string) {
    localStorage.setItem("token", val);
  }
}
