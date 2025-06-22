import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardConducteur} from '../conducteur/dashboard-conducteur/dashboard-conducteur';
import {DashboardExpediteur} from './dashboard-expediteur/dashboard-expediteur';

const routes: Routes = [
  {
    path:"",
    component:DashboardExpediteur
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpediteurRoutingModule { }
