import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/products.interface';
import { Services } from '../../../services/services';

@Component({
  selector: 'app-products-list',
  imports: [ RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {

  product: Product[] =[];
  returnUrl: string | null = null;
  selectedId: number|null=null;
  constructor(
    private services: Services,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.product = this.services.getProducts();
  }

  getProduct(p:Product): void {
    this.selectedId = p.id;
    this.router.navigate(['/PRODUCTS', p.id,'DETAILS']);
  }
  products: any[] = [];

viewProductDetails(product: any) {
  console.log(product);
}

}
