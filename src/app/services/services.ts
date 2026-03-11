
import { Product } from '../models/products.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Services { products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: 10,
    status: "Available",
    description: "High performance laptop",
    brand: "Dell",
    rating: 4.5,
    createdDate: "2025-01-10"
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
    stock: 0,
    status: "Out of Stock",
    description: "Latest Android smartphone",
    brand: "Samsung",
    rating: 4.3,
    createdDate: "2025-02-01"
  },
  {
    id: 3,
    name: "Headphones",
    category: "Accessories",
    price: 150,
    stock: 5,
    status: "Limited",
    description: "Noise cancelling headphones",
    brand: "Sony",
    rating: 4.7,
    createdDate: "2025-01-20"
  },
  {
    id: 4,
    name: "Keyboard",
    category: "Accessories",
    price: 70,
    stock: 20,
    status: "Available",
    description: "Mechanical gaming keyboard",
    brand: "Logitech",
    rating: 4.6,
    createdDate: "2025-01-15"
  },
  {
    id: 5,
    name: "Mouse",
    category: "Accessories",
    price: 40,
    stock: 15,
    status: "Available",
    description: "Wireless gaming mouse",
    brand: "Razer",
    rating: 4.4,
    createdDate: "2025-01-18"
  },
  {
    id: 6,
    name: "Monitor",
    category: "Electronics",
    price: 300,
    stock: 8,
    status: "Available",
    description: "27 inch 4K monitor",
    brand: "LG",
    rating: 4.5,
    createdDate: "2025-02-05"
  },
  {
    id: 7,
    name: "Tablet",
    category: "Electronics",
    price: 500,
    stock: 3,
    status: "Limited",
    description: "Lightweight tablet device",
    brand: "Apple",
    rating: 4.8,
    createdDate: "2025-02-10"
  },
  {
    id: 8,
    name: "Webcam",
    category: "Accessories",
    price: 90,
    stock: 12,
    status: "Available",
    description: "HD streaming webcam",
    brand: "Logitech",
    rating: 4.3,
    createdDate: "2025-02-12"
  },
  {
    id: 9,
    name: "Printer",
    category: "Office",
    price: 200,
    stock: 0,
    status: "Out of Stock",
    description: "Wireless color printer",
    brand: "HP",
    rating: 4.2,
    createdDate: "2025-02-15"
  },
  {
    id: 10,
    name: "Speaker",
    category: "Audio",
    price: 120,
    stock: 7,
    status: "Available",
    description: "Bluetooth portable speaker",
    brand: "JBL",
    rating: 4.6,
    createdDate: "2025-02-20"
  }
];
  getProducts(): Product[] {
    return this.products;
  }

  getProductsById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
}
  updateProducts(updated: Product): void{
    const idx = this.products.findIndex(p => p.id === updated.id);
    if (idx !== -1) this.products[idx] = {...updated};
  }
  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }
  login(): void { sessionStorage.setItem('auth_token', 'demo_token');}
  logout(): void { sessionStorage.removeItem('auth_token');}
}
