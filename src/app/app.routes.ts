import { Routes } from '@angular/router';
import { LoginComponent } from './Core/login/login.component';
import { HomeComponent } from './Employee/home/home.component';
import { AdminComponent } from './Admin/admin/admin.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
];
