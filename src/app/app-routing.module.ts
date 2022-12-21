import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { CelebrityComponent } from './celebrity/celebrity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'celeb-component', component: CelebrityComponent },
  { path: 'cars-component', component: CarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
