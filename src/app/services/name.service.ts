import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  name: string;
  constructor() {}
  setName(name: string) {
    this.name = name;
  }
}
