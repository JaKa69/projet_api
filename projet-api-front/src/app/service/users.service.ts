import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = signal<any[]>([]);

  constructor(private api: ApiService) {}

  async getUsers() {
    const data = await this.api.get<any[]>('/user/all');
    this.users.set(data);
    return data;
  }

  async getUser(id: string | number) {
    return this.api.get(`/users/${id}`);
  }

  async createUser(payload: any) {
    return this.api.post('/users', payload);
  }

  async updateUser(id: string | number, payload: any) {
    return this.api.put(`/users/${id}`, payload);
  }

  async deleteUser(id: string | number) {
    return this.api.delete(`/users/${id}`);
  }
}
