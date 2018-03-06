import { User } from './../models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: Array<User>, pattern: string): Array<User> {
    if (!users) {
      return [];
    } else if (!pattern) {
      return users;
    } else {
      const filterPattern = new RegExp(pattern, 'i');
      return users.filter(user => user.email.match(filterPattern));
    }
  }

}
