import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserListComponent } from 'src/app/components/user-list';
import { UserService } from 'src/app/services/user';
import { HttpApiService } from 'src/app/services/http-api';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, UserListComponent],
      imports: [MatToolbarModule, HttpClientTestingModule, MatProgressSpinnerModule],
      providers: [UserService, HttpApiService],
      teardown: { destroyAfterEach: false }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
