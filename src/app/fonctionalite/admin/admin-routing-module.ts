import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdmin} from './dashboard-admin/dashboard-admin';
import {ListeUtilisteurs} from './liste-utilisteurs/liste-utilisteurs';
import {ListeAnnoncesComponent} from './liste-annonces/liste-annonces';

const routes: Routes = [
  {
    path:"",
    component:DashboardAdmin
  },
  {
    path:"utilisateurs",
    component:ListeUtilisteurs
  },
  {
    path:"listeannonces",
    component:ListeAnnoncesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
