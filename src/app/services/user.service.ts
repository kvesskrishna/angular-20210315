import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/user');
  }

  setPosts(data) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
