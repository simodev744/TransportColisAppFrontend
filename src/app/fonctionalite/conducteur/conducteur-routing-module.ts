import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdmin} from '../admin/dashboard-admin/dashboard-admin';
import {DashboardConducteur} from './dashboard-conducteur/dashboard-conducteur';
import {CreateAnnonceComponent} from './create-annonce/create-annonce';
import {ListeannonceExp} from '../expediteur/listeannonce-exp/listeannonce-exp';

const routes: Routes = [
  {
    path:"",
    component:DashboardConducteur,

  },
  {
    path:"listeannonce",
    component:ListeannonceExp
  },
  {
    path:"createAnnonce",
    component:CreateAnnonceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConducteurRoutingModule { }
