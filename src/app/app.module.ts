import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material module
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

//component
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main';

const matModules = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
];

const modules = [
  ...matModules,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
];

const components = [AppComponent, MainComponent];
const services: any[] = [];
const guards: any[] = [];
// const directives: any[] = [];
// const pipes: any[] = [];

@NgModule({
  declarations: [...components,],
  imports: [AppRoutingModule, ...modules],
  providers: [...services, ...guards],
  bootstrap: [AppComponent],
})
export class AppModule {}