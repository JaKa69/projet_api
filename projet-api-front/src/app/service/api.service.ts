import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}


  async get<T>(endpoint: string, params?: any): Promise<T> {
    return firstValueFrom(this.http.get<T>(`${this.API_URL}${endpoint}`, { params }));
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    return firstValueFrom(this.http.post<T>(`${this.API_URL}${endpoint}`, body));
  }

  async put<T>(endpoint: string, body: any): Promise<T> {
    return firstValueFrom(this.http.put<T>(`${this.API_URL}${endpoint}`, body));
  }

  async delete<T>(endpoint: string): Promise<T> {
    return firstValueFrom(this.http.delete<T>(`${this.API_URL}${endpoint}`));
  }
}
