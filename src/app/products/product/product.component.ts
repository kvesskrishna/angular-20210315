import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Output() test = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  doTest(t) {
    this.test.emit(t);
  }
}
