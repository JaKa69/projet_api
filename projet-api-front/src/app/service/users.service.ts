import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  starturi: string = "/user/";

  constructor(private api: ApiService) {}
  getAll(): Promise<User[]> {
    return this.api.get(this.starturi +'all');
  }
  
  getById(id: string): Promise<User> {
    return this.api.get(this.starturi + id);
  }

  create(payload: User) {
    return this.api.post(this.starturi, payload);
  }

  update(id: string, payload: User) {
    return this.api.put(this.starturi + id, payload);
  }

  delete(id: string) {
    return this.api.delete(this.starturi +id);
  }
}