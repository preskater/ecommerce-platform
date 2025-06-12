export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}