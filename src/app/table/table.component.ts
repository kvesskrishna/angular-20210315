import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  title: string;
  num: number;
  range: number;
  result: any;
  constructor() {
    console.log('constructor called..');
  }
  ngOnInit() {
    this.num = 0;
    this.range = 0;
    console.log('oninit called..');
  }
  generateTable() {
    this.result = [];
    console.log('generating table..');
    // let table = '';
    for (let i = 1; i <= this.range; i++) {
      // i = i + j; => i += j;
      this.result.push(this.num * i);
      //   this.result += `
      //     <p>${this.num} x ${i} = ${this.num * i}</p>
      //     `;
      console.log(this.result);
    }
  }
  ngOnChanges() {
    console.log('changes called..');
  }
  ngAfterViewInit() {
    console.log('afterviewint called..');
  }
  ngOnDestroy() {
    console.log('destory called..');
  }
  updateNum() {
    this.num++;
  }
}
