import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  products: Product | undefined ;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewallProduct().subscribe(data =>{
      this.products = data;
    })
  }

}
