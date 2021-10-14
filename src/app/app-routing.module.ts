import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SearchComponent } from './components/pages/search/search.component';
import { LoginGuard } from './guards/login.guard';
import { DetailsComponent } from './components/pages/details/details.component';
import { PremiersComponent } from './components/pages/premiers/premiers.component';
import { UsersComponent } from './components/pages/users/users.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'details',
    component: DetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'premiers',
    component: PremiersComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
