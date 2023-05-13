import { Component } from '@angular/core';
import { USERS } from 'src/app/user-list/user.data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = USERS;
}
