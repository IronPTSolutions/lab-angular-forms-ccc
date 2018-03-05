import { User } from './../../../shared/models/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user: User;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onClickDelete() {
    this.onDelete.emit(this.user.email);
  }
}
