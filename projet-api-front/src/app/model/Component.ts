import { Category } from './Category';

export interface Component {
  _id: string;
  category: string | Category;
  brand: string;
  title: string;
  model?: string;
  description?: string;
  specifications?: Record<string, any>;
  image?: string;
  createdAt: string;
  updatedAt: string;
}