import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrdersModule } from './orders/orders.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ListOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrdersModule,
    SiteLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
