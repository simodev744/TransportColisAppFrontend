import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth/auth-service';


@Component({
  selector: 'app-dashboard-expediteur',
  imports: [],
  templateUrl: './dashboard-expediteur.html',
  styleUrl: './dashboard-expediteur.css'
})
export class DashboardExpediteur implements OnInit{
  ngOnInit(): void {
      console.log(this.authservice.decodejwt());
  }

  private authservice=inject(AuthService);




}
