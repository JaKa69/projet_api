import { Component } from './Component';
import { Merchant } from './Merchant';

export interface Price {
  _id: string;
  component: string | Component;
  merchant: string | Merchant;
  price: number;
  createdAt: string;
  updatedAt: string;
}