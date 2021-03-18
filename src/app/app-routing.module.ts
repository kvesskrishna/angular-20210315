import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent as AdminHome } from './admin/home/home.component';
import { PostsComponent } from './posts/posts.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'detail/:id/:name', component: ProductDetailComponent },
  {
    path: 'admin',
    // component: AdminHome,
    // lazy loading
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

  //wild card route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
