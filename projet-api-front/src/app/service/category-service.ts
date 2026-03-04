import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get('/categories');
  }

  getById(id: string) {
    return this.api.get(`/categories/${id}`);
  }

  create(data: any) {
    return this.api.post('/categories', data);
  }

  update(id: string, data: any) {
    return this.api.put(`/categories/${id}`, data);
  }

  delete(id: string) {
    return this.api.delete(`/categories/${id}`);
  }
}
