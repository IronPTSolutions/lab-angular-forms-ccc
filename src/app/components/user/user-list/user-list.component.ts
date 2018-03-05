import { User } from './../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: Array<User> = [];

  onCreateUser(user) {
    this.users.push(user);
  }

  onDeleteUser(email) {
    this.users = this.users.filter(u => u.email !== email);
  }
}
