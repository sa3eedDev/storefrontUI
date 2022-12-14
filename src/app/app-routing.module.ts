import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:"", component: ProductListComponent},
  {path: "product/:id" , component: DetailedViewComponent},
  {path: "cart", component: CartComponent},
  {path: "confirmation", component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
