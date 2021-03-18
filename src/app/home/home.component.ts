import { Component, OnInit } from '@angular/core';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],
})
export class HomeComponent implements OnInit {
  constructor(private nameservice: NameService) {}
  uname: string = '';

  ngOnInit(): void {}
  setUname() {
    this.nameservice.setName(this.uname);
  }
}
