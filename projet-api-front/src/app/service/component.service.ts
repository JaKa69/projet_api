import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Component } from '../model/Component';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  starturi: string = "/components/";

  constructor(private api: ApiService) {}
  getAll(): Promise<Component[]> {
    return this.api.get(this.starturi);
  }
  
  getById(id: string): Promise<Component> {
    return this.api.get(this.starturi + id);
  }

  create(payload: Component) {
    return this.api.post(this.starturi, payload);
  }

  update(id: string, payload: Component) {
    return this.api.put(this.starturi + id, payload);
  }

  delete(id: string) {
    return this.api.delete(this.starturi +id);
  }
}
