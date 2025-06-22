import { Routes } from '@angular/router';
import {LoginComponent} from './fonctionalite/auth/login/login';
import {RegisterComponent} from './fonctionalite/auth/register/register';
import {Home} from './fonctionalite/home/home';
import {authGuard} from './core/auth/auth-guard';
import {RoleGuard} from './core/auth/role-guard';
import {DashboardExpediteur} from './fonctionalite/expediteur/dashboard-expediteur/dashboard-expediteur';
import {DashboardAdmin} from './fonctionalite/admin/dashboard-admin/dashboard-admin';
import {DashboardConducteur} from './fonctionalite/conducteur/dashboard-conducteur/dashboard-conducteur';
import {AuthModule} from './fonctionalite/auth/auth-module';
import {ConducteurModule} from './fonctionalite/conducteur/conducteur-module';


export const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'expediteur',
    loadChildren:()=>import('./fonctionalite/expediteur/expediteur-module')
      .then(m=>m.ExpediteurModule ),

    canActivate:[authGuard,RoleGuard], data: { role: 'EXPEDITEUR' } },


  { path: 'admin',
     loadChildren:()=>import('./fonctionalite/admin/admin-module').then(m=>m.AdminModule),
    canActivate:[authGuard,RoleGuard], data: { role: 'ADMINISTRATEUR' } },

  { path: 'conducteur',
    loadChildren:()=>import('./fonctionalite/conducteur/conducteur-module')
      .then(m=>ConducteurModule)
  ,canActivate:[authGuard,RoleGuard], data: { role: 'CONDUCTEUR' } },

  //**login module
  {
    path: '',
    loadChildren: () =>import('./fonctionalite/auth/auth-module').then(m=>m.AuthModule)
  },

  {path:"**",redirectTo:"home"},
];


