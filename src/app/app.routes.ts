import { Routes } from '@angular/router';
import {LoginComponent} from './fonctionalite/auth/login/login';
import {RegisterComponent} from './fonctionalite/auth/register/register';
import {Home} from './fonctionalite/home/home';
import {authGuard} from './core/auth/auth-guard';
import {RoleGuard} from './core/auth/role-guard';
import {DashboardExpediteur} from './fonctionalite/expediteur/dashboard-expediteur/dashboard-expediteur';
import {DashboardAdmin} from './fonctionalite/admin/dashboard-admin/dashboard-admin';
import {DashboardConducteur} from './fonctionalite/conducteur/dashboard-conducteur/dashboard-conducteur';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: Home},
  { path: 'expediteur', component: DashboardExpediteur,canActivate:[authGuard,RoleGuard], data: { role: 'EXPEDITEUR' } },
  { path: 'admin', component: DashboardAdmin,canActivate:[authGuard,RoleGuard], data: { role: 'ADMINISTRATEUR' } },
  { path: 'conducteur', component: DashboardConducteur,canActivate:[authGuard,RoleGuard], data: { role: 'CONDUCTEUR' } },
];


