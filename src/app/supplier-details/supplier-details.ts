import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../models/supplier.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html'
})
export class SupplierDetailsComponent implements OnInit {

  supplier!: Supplier;

  constructor(
    private route: ActivatedRoute,
    private supplierService: SupplierService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const data = this.supplierService.getSupplierById(id);
      if (data) {
        this.supplier = { ...data };
      }
    });
  }

  saveSupplier() {
    this.supplierService.updateSupplier(this.supplier);
    alert('Supplier updated!');
  }

  goBack() {
    this.router.navigate(['/suppliers']);
  }
}