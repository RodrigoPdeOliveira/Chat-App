import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  currentUser: User = {
    name: ''
  }

  setUserName(name: string): void {
    this.currentUser.name = name
  }

  getUserName(): string {
    return this.currentUser.name
  }

  constructor() { }
}
