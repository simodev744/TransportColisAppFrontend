import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardConducteur} from '../conducteur/dashboard-conducteur/dashboard-conducteur';
import {DashboardExpediteur} from './dashboard-expediteur/dashboard-expediteur';
import {Listedemandes} from './listedemandes/listedemandes';
import {CreateDemande} from './create-demande/create-demande';
import {ListeannonceExp} from './listeannonce-exp/listeannonce-exp';

const routes: Routes = [
  {
    path:"",
    component:DashboardExpediteur
  },
  {
    path:"listedemandes",
    component:Listedemandes
  },
  {
    path:"create",
    component:CreateDemande
  },
  {
    path:"listeannonce",
    component:ListeannonceExp
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpediteurRoutingModule { }
