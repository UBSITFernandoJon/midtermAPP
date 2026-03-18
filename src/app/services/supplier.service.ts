import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliers: Supplier[] = [
    {
        id: 1,
        supplierName: 'Supplier One',
        location: 'New York',
        email: 'contact1@supplierone.com',
        contactPerson: 'John Doe',
        phone: '212-555-0101',
        productsSupplied: 'Electronics'
      },
      {
        id: 2,
        supplierName: 'Supplier Two',
        location: 'Los Angeles',
        email: 'contact2@suppliertwo.com',
        contactPerson: 'Jane Smith',
        phone: '310-555-0202',
        productsSupplied: 'Furniture'
      },
      {
        id: 3,
        supplierName: 'Supplier Three',
        location: 'Chicago',
        email: 'contact3@supplierthree.com',
        contactPerson: 'Mike Johnson',
        phone: '773-555-0303',
        productsSupplied: 'Tools'
      },
      {
        id: 4,
        supplierName: 'Supplier Four',
        location: 'Houston',
        email: 'contact4@supplierfour.com',
        contactPerson: 'Emily Davis',
        phone: '713-555-0404',
        productsSupplied: 'Kitchenware'
      },
      {
        id: 5,
        supplierName: 'Supplier Five',
        location: 'Miami',
        email: 'contact5@supplierfive.com',
        contactPerson: 'David Wilson',
        phone: '305-555-0505',
        productsSupplied: 'Clothing'
      },
      {
        id: 6,
        supplierName: 'Supplier Six',
        location: 'Seattle',
        email: 'contact6@sixsupplier.com',
        contactPerson: 'Sarah Brown',
        phone: '206-555-0606',
        productsSupplied: 'Electronics'
      },
      {
        id: 7,
        supplierName: 'Supplier Seven',
        location: 'San Francisco',
        email: 'contact7@sevensupplier.com',
        contactPerson: 'Chris Lee',
        phone: '415-555-0707',
        productsSupplied: 'Office Supplies'
      },
      {
        id: 8,
        supplierName: 'Supplier Eight',
        location: 'Boston',
        email: 'contact8@eightsupplier.com',
        contactPerson: 'Anna Kim',
        phone: '617-555-0808',
        productsSupplied: 'Books'
      },
      {
        id: 9,
        supplierName: 'Supplier Nine',
        location: 'Denver',
        email: 'contact9@ninesupplier.com',
        contactPerson: 'Robert Martinez',
        phone: '303-555-0909',
        productsSupplied: 'Sporting Goods'
      },
      {
        id: 10,
        supplierName: 'Supplier Ten',
        location: 'Atlanta',
        email: 'contact10@tensupplier.com',
        contactPerson: 'Laura Garcia',
        phone: '404-555-1010',
        productsSupplied: 'Health Products'
      }
  ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = updatedSupplier;
    }
  }
}