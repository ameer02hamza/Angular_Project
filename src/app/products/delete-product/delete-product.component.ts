import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId:Product |undefined;
  product:Product |undefined;
  constructor(private productService:ProductService, private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.productId = data.id;
    })

    this.productService.deleteProduct(this.productId).subscribe(data =>{
      this.product = data
      this.router.navigate(['/'])
    })
  }

}
