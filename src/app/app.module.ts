import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { ProductsComponent } from './products/products.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { UsersComponent } from './users/users.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProductComponent } from './products/product/product.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ProductsComponent,
    DiscountPipe,
    UsersComponent,
    SearchPipe,
    ProductComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    ProductDetailComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
