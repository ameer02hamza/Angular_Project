import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductbyDateComponent } from './view-productby-date/view-productby-date.component';
import { ViewProductbycategoryComponent } from './view-productbycategory/view-productbycategory.component';


@NgModule({
  declarations: [ProductsComponent, 
    AddProductComponent, 
    ViewProductComponent, 
    UpdateProductComponent,
     DeleteProductComponent, 
     ViewAllProductComponent, 
     ViewProductbyDateComponent, 
     ViewProductbycategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[ProductsComponent]
})
export class ProductsModule { }
