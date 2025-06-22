import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdmin} from '../admin/dashboard-admin/dashboard-admin';
import {DashboardConducteur} from './dashboard-conducteur/dashboard-conducteur';
import {ListeAnnoncesComponent} from '../admin/liste-annonces/liste-annonces';
import {CreateAnnonceComponent} from './create-annonce/create-annonce';

const routes: Routes = [
  {
    path:"",
    component:DashboardConducteur,

  },
  {
    path:"listeannonce",
    component:ListeAnnoncesComponent
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
