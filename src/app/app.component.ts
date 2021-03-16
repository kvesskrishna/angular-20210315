import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>App</h1>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    const nums = [1, 2, 3, 4, 5];
    const evens = nums.filter((n) => n % 2 == 0);
    const odds = nums.filter((n) => n % 2 != 0);
    console.log(evens, odds);
    nums.forEach((n) => console.log('number is ' + n));
    const doubles = nums.map((n) => 2 * n);
    console.log(doubles);
  }

  title = 'my first component';
  count = 0;
  name = 'Tom';
  capital = '';
  countries = [
    { name: 'India', capital: 'New Delhi' },
    { name: 'Bangladesh', capital: 'Dhaka' },
    { name: 'Nepal', capital: 'Kathmandu' },
  ];
  getCapital(e) {
    let c = e.target.value;
    this.capital = this.countries.filter(
      (country) => country.name == c
    )[0].capital;
  }
  getTitle() {
    return this.title.toUpperCase();
  }
  changeNumber(e) {
    console.log(e.target.value);
    // if (e.target.value == '+') {
    //   this.count++;
    // } else {
    //   if (this.count == 0) {
    //     alert('min value reached')
    //   } else {
    //     this.count--;
    //   }
    // }
    e.target.value == '+'
      ? this.count < 10
        ? this.count++
        : alert('max value reached')
      : this.count == 0
      ? alert('min value reached')
      : this.count--; // this.count = this.count + 1
  }
  setName(e) {
    console.log(e.target.value);
    this.name = e.target.value;
  }
}
