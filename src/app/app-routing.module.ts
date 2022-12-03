import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:"", component: ProductListComponent},
  {path: "product/:id" , component: DetailedViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
