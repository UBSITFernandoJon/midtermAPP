import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  showModal: boolean = false;
  selectedProduct: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // initialization logic here if needed
  }

  closeModal() {
    this.showModal = false;
  }

}