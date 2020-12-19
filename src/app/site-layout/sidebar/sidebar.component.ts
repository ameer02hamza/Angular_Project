import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import {Categories} from "../categories"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 categoryList: Categories;
  constructor(private productsService:ProductService) { }

  ngOnInit(): void {

    this.productsService.getCategory().subscribe((data: any) => {
      this.categoryList = data;
      console.log("njhvv")
      console.log(data, "hi")
    })

  }

}
