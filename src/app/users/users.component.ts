import { Component, Input, OnInit } from '@angular/core';
import { NameService } from '../services/name.service';
import { UserService } from '../services/user.service';
import { users } from './../data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() ptitle: string;
  users: any;
  uname = '';
  key = '';
  firstuser: any;
  errMsg = '';
  isError: boolean = false;
  constructor(
    private nameservice: NameService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.firstuser = this.users[0].username;
      },
      (error) => {
        if (error.status) {
          this.isError = true;
          this.errMsg = 'Resource not found';
        }
      }
    );
    this.uname = this.nameservice.name;
    console.log(this.ptitle);
  }
}
