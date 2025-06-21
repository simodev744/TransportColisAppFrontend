import { Routes } from '@angular/router';
import {LoginComponent} from './fonctionalite/auth/login/login';
import {RegisterComponent} from './fonctionalite/auth/register/register';
import {Home} from './fonctionalite/home/home';
import {authGuard} from './core/auth/auth-guard';
import {RoleGuard} from './core/auth/role-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: Home,canActivate:[authGuard,RoleGuard], data: { role: 'ADMINISTRATEUR' } },
];


