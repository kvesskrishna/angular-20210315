import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let users = value;
    let key = args[0];
    // return null;
    return users.filter(
      (user) =>
        user.fname.toLowerCase().includes(key.toLowerCase()) ||
        user.lname.toLowerCase().includes(key.toLowerCase()) ||
        user.email.toLowerCase().includes(key.toLowerCase())
    );
  }
}
