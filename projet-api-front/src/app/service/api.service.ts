import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:8080/api';
  private token = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  setToken(jwt: string) {
    this.token.set(jwt);
  }

  private get headers(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (this.token()) {
      headers = headers.set('Authorization', `Bearer ${this.token()}`);
    }
    return headers;
  }

  async get<T>(endpoint: string, params?: any): Promise<T> {
    return firstValueFrom(this.http.get<T>(`${this.API_URL}${endpoint}`, { headers: this.headers, params }));
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    return firstValueFrom(this.http.post<T>(`${this.API_URL}${endpoint}`, body, { headers: this.headers }));
  }

  async put<T>(endpoint: string, body: any): Promise<T> {
    return firstValueFrom(this.http.put<T>(`${this.API_URL}${endpoint}`, body, { headers: this.headers }));
  }

  async delete<T>(endpoint: string): Promise<T> {
    return firstValueFrom(this.http.delete<T>(`${this.API_URL}${endpoint}`, { headers: this.headers }));
  }
}
