import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct:Product |undefined;
  constructor(private productService:ProductService ) { }

  onSubmit(data: any){
    console.warn(data)
    this.addProduct = data
  }
  ngOnInit(): void {

  }

}
