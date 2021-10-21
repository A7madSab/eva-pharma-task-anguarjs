import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../login/auth.guard';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: CountryComponent,
  },
  { path: ':id', canActivate: [AuthGuard], component: CountryDetailsComponent },
];

@NgModule({
  declarations: [CountryComponent, CountryDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryModule {}
