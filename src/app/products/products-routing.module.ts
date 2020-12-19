import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductbycategoryComponent } from './view-productbycategory/view-productbycategory.component';

const routes: Routes = [
  // { path: '', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: '', component: ViewAllProductComponent },
  { path: 'productitem', component: ViewProductComponent },
  { path: 'productitem/:id', component: ViewProductComponent },
  { path: 'deleteproduct', component: DeleteProductComponent },
  { path: 'cate', component: ViewProductbycategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
