import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth/auth-service';

@Component({
  selector: 'app-dashboard-admin',
  imports: [],
  templateUrl: './dashboard-admin.html',
  styleUrl: './dashboard-admin.css'
})
export class DashboardAdmin implements OnInit{

  ngOnInit(): void {
    console.log(this.authservice.decodejwt());
  }

  private authservice=inject(AuthService);

}
