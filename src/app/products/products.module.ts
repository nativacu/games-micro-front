import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./products.component";
import {DetailsComponent} from "./details/details.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {ProductsRoutingModule} from "./products-routing.module";


@NgModule({
  declarations: [
			ProductsComponent,
			DetailsComponent,
	],
	imports: [
		CommonModule,
		MatTableModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatGridListModule,
		ProductsRoutingModule,
	]
})
export class ProductsModule { }
