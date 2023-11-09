import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//material module
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


//component
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main';
import { UserListComponent } from './components/user-list';
import { UserCardComponent } from './components/user-card';

//service
import { HttpApiService } from './services/http-api';
import { UserService } from './services/user';

const matModules = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatCardModule, 
  MatProgressSpinnerModule
];

const modules = [
  ...matModules,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
];

const components = [AppComponent, MainComponent, UserListComponent, UserCardComponent];
const services: any[] = [HttpApiService, UserService];
const guards: any[] = [];
// const directives: any[] = [];
// const pipes: any[] = [];

@NgModule({
  declarations: [...components,],
  imports: [AppRoutingModule, ...modules],
  providers: [...services, ...guards],
  bootstrap: [AppComponent],
})
export class AppModule { }