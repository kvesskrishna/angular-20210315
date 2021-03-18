import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from './../../data/products';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id: any;
  products = products;
  product: any;
  result: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route);
    this.id = this.route.snapshot.params.id;

    console.log(this.id, this.route.snapshot.params.name);
    this.product = this.products.filter((prod) => prod.id == this.id)[0];
    this.result = this.sum(2, 3);
  }
  sum(a, b): number {
    return a + b;
  }
}
