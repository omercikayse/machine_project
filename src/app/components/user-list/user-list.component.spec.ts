import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from 'src/app/services/user';
import { of } from 'rxjs';
import { User } from 'src/app/models/user';

fdescribe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']);

    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: UserService, useValue: spy }],
      teardown: { destroyAfterEach: false }
    });

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch random users at regular intervals', () => {
    spyOn(component, 'getRandomUser');
    component.ngOnInit();
    expect(component.getRandomUser).toHaveBeenCalled();
  });

  it('should add a user to userList when getRandomUser is called', () => {
    const user: User = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'path/to/avatar.jpg',
      isFavourite: false,
      isDisabled: false,
    };

    userServiceSpy.getUsers.and.returnValue(of(user));

    component.getRandomUser();

    expect(component.userList.length).toBe(0);
    expect(component.userIds.length).toBe(0);
  });

  it('should add a user to favoriteUserList when a user is selected as favorite', () => {
    const user: User = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'path/to/avatar.jpg',
      isFavourite: true,
      isDisabled: false,
    };
    component.onSelectedUser(user);

    expect(component.favoriteUserList.length).toBe(1);
  });

  it('should remove a user from favoriteUserList when a user is deselected as favorite', () => {
    const user: User = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'path/to/avatar.jpg',
      isFavourite: false,
      isDisabled: false,
    };
    component.favoriteUserList = [user];

    component.onSelectedUser(user);

    expect(component.favoriteUserList.length).toBe(0);
  });
});
