import { User } from './User';
import { Component } from './Component';
import { Price } from './Price';

export interface ConfigurationItem {
  component: string | Component;
  price: string | Price;
}

export interface Configuration {
  _id: string;
  user: string | User;
  name: string;
  components: ConfigurationItem[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}