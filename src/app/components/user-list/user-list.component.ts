import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user';

const MAX_USERS = 10;
const MIN = 1;
const MAX = 12;
const REFRESH_INTERVAL = 5000;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public userList: User[] = [];
  public favoriteUserList: User[] = [];
  public userIds: number[] = [];

  private interval: any;
  private subscription!: Subscription

  constructor(private userService: UserService) { }

  public ngOnInit() {
    this.getRandomUser();
  }

  public ngOnDestroy() {
    clearInterval(this.interval);
    this.subscription.unsubscribe();
  }

  public getRandomUser(): void {
    this.interval = setInterval(() => {
      const userId = this.getRandomUniqueNumber(MIN, MAX, this.userIds);
      this.getUser(userId);
    }, REFRESH_INTERVAL);
  }

  public getUser(userId: number): void {
    this.userIds.push(userId);

    this.subscription = this.userService.getUsers(userId).subscribe(value => {

      if (this.favoriteUserList.find((user: User) => user.id === value.id)) {
        value.isFavourite = true;
      }

      this.userList.push(value);

      if (this.userList.length > MAX_USERS && this.userIds.length > MAX_USERS) {
        this.userList.shift();
        this.userIds.shift();
      }

      this.favoriteUserListLimitCheck();
    })
  }

  public onSelectedUser(user: User): void {
    if (user.isFavourite) { this.favoriteUserList.push(user); }
    else {
      this.favoriteUserList = this.favoriteUserList.filter((favoriteUser: User) => favoriteUser.id !== user.id);
    }

    this.favoriteUserListLimitCheck();
  }

  private favoriteUserListLimitCheck(): void {
    if (this.favoriteUserList.length >= MAX_USERS) {
      this.userList.filter(i => !i.isFavourite).forEach((user: User) => user.isDisabled = true)
    }
    else {
      this.userList.forEach((user: User) => user.isDisabled = false)
    }
  }

  private getRandomUniqueNumber(min: number, max: number, numberList: number[]): number {
    if (!Array.isArray(numberList)) {
      throw new Error("numberList must be an array.");
    }

    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numberList.includes(randomNumber));

    return randomNumber;
  }
}
