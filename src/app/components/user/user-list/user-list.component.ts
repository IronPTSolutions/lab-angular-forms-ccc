import { User } from './../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  search: string = '';
  users: Array<User> = [
    {
      name: 'María',
      email: 'maria@example.org',
      password: '12345678',
      birthday: new Date('01/14/1995'),
      avatar: 'http://lorempixel.com/200/200/nature/1'
    },
    {
      name: 'Pedro',
      email: 'pedro@example.org',
      password: '12345678',
      birthday: new Date('02/15/1986'),
      avatar: 'http://lorempixel.com/200/200/nature/2'
    }
];

  onCreateUser(user) {
    this.users.push(user);
  }

  onDeleteUser(email) {
    this.users = this.users.filter(u => u.email !== email);
  }
}
