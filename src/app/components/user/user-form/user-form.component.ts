import { User } from './../../../shared/models/user.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

const AVATAR_URL = 'http://lorempixel.com/200/200/nature/';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();
  @Output() onCreate: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(form: NgForm) {
    this.user.avatar = AVATAR_URL;
    this.onCreate.emit(this.user);
    form.reset();
  }
}
