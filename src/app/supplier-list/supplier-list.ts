import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../models/supplier.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-list.html'
})
export class SuppliersListComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplier(id: number) {
    this.router.navigate(['/suppliers', id]);
  }
}
