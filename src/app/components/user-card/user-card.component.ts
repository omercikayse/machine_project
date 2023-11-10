import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() public user!: User;
  @Output() selectedUser = new EventEmitter<User>();

  constructor() { }

  public toggleFavourite(): void {
    this.user.isFavourite = !this.user.isFavourite;
    this.selectedUser.emit(this.user);
  }
}
