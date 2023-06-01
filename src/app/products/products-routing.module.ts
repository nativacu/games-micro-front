import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from "./details/details.component";
import {ProductsComponent} from "./products.component";

const routes: Routes = [
	{path: '', component: ProductsComponent},
	{path: 'games', component: ProductsComponent},
	{path: 'games/:id', component: DetailsComponent},
	{path: '', redirectTo: '/games', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
