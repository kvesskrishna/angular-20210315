import { Component, OnInit } from '@angular/core';
import { products } from './../data/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  myproducts = products;
  today = new Date();
  constructor() {}

  ngOnInit(): void {
    console.log(this.myproducts);
  }
}
