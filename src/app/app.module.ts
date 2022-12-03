import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './services/items.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ProductListComponent,
    DetailedViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
