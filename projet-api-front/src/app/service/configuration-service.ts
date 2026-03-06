import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Configuration } from '../model/Configuration';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  starturi: string = "/configurations/";

  constructor(private api: ApiService) {}
  
  getAll(): Promise<Configuration[]> {
    return this.api.get(this.starturi);
  }
  
  getById(id: string): Promise<Configuration> {
    return this.api.get(this.starturi + id);
  }

  create(payload: Configuration) {
    return this.api.post(this.starturi, payload);
  }

  update(id: string, payload: Configuration) {
    return this.api.put(this.starturi + id, payload);
  }

  delete(id: string) {
    return this.api.delete(this.starturi +id);
  }
}
