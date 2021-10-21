import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './pages/login/auth.guard';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/country', pathMatch: 'full' },
  {
    path: 'country',
    loadChildren: () =>
      import('./pages/country/country.module').then((m) => m.CountryModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
