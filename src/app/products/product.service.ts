import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Product } from './product';
import { Categories } from '../site-layout/categories';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  createProduct(productBody:any):Observable<Product>{

   const baseUrl ="http://localhost:3000/product"; 
   return this.httpClient.post<Product>(baseUrl, productBody);

  }
  viewallProduct():Observable<Product>{

    const baseUrl ="http://localhost:3000/product"; 
    return this.httpClient.get<Product>(baseUrl);
 
   }

  viewProduct(productid:any):Observable<Product>{

    const baseUrl ="http://localhost:3000/product/"+productid; 
    return this.httpClient.get<Product>(baseUrl);
 
   }

   deleteProduct(productid:any):Observable<Product>{

    const baseUrl ="http://localhost:3000/product/"+productid; 
    return this.httpClient.delete<Product>(baseUrl);
 
   }

   updateProduct(productid:any, productBody:any):Observable<Product>{

    const baseUrl ="http://localhost:3000/product/"+productid; 
    return this.httpClient.put<Product>(baseUrl, productBody);
 
   }

  getCategory(){
    const baseUrl = "http://localhost:3000/Categories";
    return this.httpClient.get<Categories>(baseUrl)
  }
}
