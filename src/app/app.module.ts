import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
		ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
