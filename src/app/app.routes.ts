import { Routes } from '@angular/router';
import {LoginComponent} from './fonctionalite/auth/login/login';
import {RegisterComponent} from './fonctionalite/auth/register/register';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];



