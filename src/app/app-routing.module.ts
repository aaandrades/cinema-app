import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SearchComponent } from './components/pages/search/search.component';
import { LoginGuard } from './guards/login.guard';
import { DetailsComponent } from './components/pages/details/details.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [LoginGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    // canActivate: [LoginGuard],
  },
  {
    path: 'details',
    component: DetailsComponent,
    // canActivate: [LoginGuard],
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
