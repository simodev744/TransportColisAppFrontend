import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdmin} from '../admin/dashboard-admin/dashboard-admin';
import {DashboardConducteur} from './dashboard-conducteur/dashboard-conducteur';

const routes: Routes = [
  {
    path:"",
    component:DashboardConducteur
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConducteurRoutingModule { }
