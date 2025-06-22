import { Component } from '@angular/core';
import {Condnav} from '../condnav/condnav';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard-conducteur',
  imports: [
    Condnav,
    RouterOutlet
  ],
  templateUrl: './dashboard-conducteur.html',
  styleUrl: './dashboard-conducteur.css'
})
export class DashboardConducteur {

}
