import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwt = signal<string | null>(null);
  private currentUser = signal<any | null>(null);

  constructor(private api: ApiService) {}

  async login(email: string, password: string) {
    const res = await this.api.post<{ token: string; user: any }>('/auth/login', { email, password });
    this.jwt.set(res.token);
    this.currentUser.set(res.user);
    this.api.setToken(res.token); // pour ApiService
    return res.user;
  }

  logout() {
    this.jwt.set(null);
    this.currentUser.set(null);
    this.api.setToken('');
  }

  isLoggedIn() {
    return !!this.jwt();
  }

  user() {
    return this.currentUser();
  }
}
