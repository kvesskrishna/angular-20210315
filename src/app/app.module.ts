import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { ProductsComponent } from './products/products.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { UsersComponent } from './users/users.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProductComponent } from './products/product/product.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, TableComponent, ProductsComponent, DiscountPipe, UsersComponent, SearchPipe, ProductComponent, HomeComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
