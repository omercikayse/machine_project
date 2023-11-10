import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardComponent } from './user-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardComponent],
      imports: [MatCardModule, MatIconModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selectedUser when toggleFavourite is called', () => {
    const user = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'path/to/avatar.jpg',
      isFavourite: false,
      isDisabled: false,
    };

    spyOn(component.selectedUser, 'emit');

    component.user = user;
    component.toggleFavourite();

    expect(component.user.isFavourite).toBe(true);
    expect(component.selectedUser.emit).toHaveBeenCalledWith(user);
  });

  it('should display user information in the template', () => {
    const user = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'path/to/avatar.jpg',
      isFavourite: false,
      isDisabled: false,
    };

    component.user = user;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    console.log({ compiled })
    
    const titleElement = compiled.querySelector('.user-card-title');
    const subtitleElement = compiled.querySelector('.user-card-subtitle');
    const imageElement = compiled.querySelector('.user-card-image');

    console.log({ titleElement })
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('John Doe');

    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement.textContent).toContain('john.doe@example.com');

    expect(imageElement).toBeTruthy();
    expect(imageElement.getAttribute('src')).toBe('path/to/avatar.jpg');
  });

  it('should disable the button if user.isDisabled is true', () => {
    const user = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      avatar: 'path/to/avatar.jpg',
      isFavourite: false,
      isDisabled: true,
    };

    component.user = user;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('.user-card-actions button[disabled]');

    expect(button).toBeTruthy();
  });
});
