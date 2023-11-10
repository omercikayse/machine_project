import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from 'src/app/services/user';
import { HttpApiService } from 'src/app/services/http-api';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [MatToolbarModule, HttpClientTestingModule, MatProgressSpinnerModule],
      providers: [UserService, HttpApiService],
      teardown: { destroyAfterEach: false }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
