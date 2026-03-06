import { Injectable } from '@angular/core';
import { Merchant } from '../model/Merchant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  starturi: string = "/merchants/";
  
    constructor(private api: ApiService) {}
    getAll(): Promise<Merchant[]> {
      return this.api.get(this.starturi);
    }
    
    getById(id: string): Promise<Merchant> {
      return this.api.get(this.starturi + id);
    }
  
    create(payload: Merchant) {
      return this.api.post(this.starturi, payload);
    }
  
    update(id: string, payload: Merchant) {
      return this.api.put(this.starturi + id, payload);
    }
  
    delete(id: string) {
      return this.api.delete(this.starturi +id);
    }
}
