import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  componentUrl: string = "/components/";

  constructor(private api: ApiService) {}
  
  async getComponents(filters?: any) {
    let query = '';
    if (filters) {
      const params = new URLSearchParams();
      if (filters.category) params.set('category', filters.category);
      if (filters.brand) params.set('brand', filters.brand);
      query = '?' + params.toString();
    }
    return this.api.get<any[]>(this.componentUrl + query);
  }

  async getComponent(id: string | number) {
    return this.api.get(this.componentUrl + `${id}`);
  }

  async createComponent(payload: any) {
    return this.api.post(this.componentUrl, payload);
  }

  async updateComponent(id: string | number, payload: any) {
    return this.api.put(this.componentUrl + `${id}`, payload);
  }

  async deleteComponent(id: string | number) {
    return this.api.delete(this.componentUrl + `${id}`);
  }
}
