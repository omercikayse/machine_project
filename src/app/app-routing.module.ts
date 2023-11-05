import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: '**',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}