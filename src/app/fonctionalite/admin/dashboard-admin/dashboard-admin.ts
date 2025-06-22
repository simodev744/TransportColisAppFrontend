import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {AdminService} from '../../../core/admin/admin-service';
import {Annonce} from '../../../components/annonce/annonce';
import {Utilistaeur} from '../../../models/Utilisateur';
import {range} from 'rxjs';


@Component({
  selector: 'app-dashboard-admin',
  imports: [


  ],
  templateUrl: './dashboard-admin.html',
  styleUrl: './dashboard-admin.css'
})



export class DashboardAdmin implements OnInit{

  annonces:Annonce[]=[];
  utilisateurs:Utilistaeur[]=[];

  statistique:any=null;


  private adminService=inject(AdminService);
  private totalUtilisateurs: WritableSignal<null>=signal(null);
  private totalAnnonces: WritableSignal<null>=signal(null);
  private utilisateursActifs:WritableSignal<null>=signal(null);
  private tauxAcceptation: WritableSignal<null>=signal(null);

  constructor() {
    Chart.register(...registerables);
  }



  ngOnInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx2 = document.getElementById('lineChart') as HTMLCanvasElement;

    this.adminService.getStats().subscribe(stats=>{

    })


    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['totalUtilisateur', ' totalAnnonces', 'tauxAcceptation', 'utilisateursActifs'],
        datasets: [{
          label: '# of Votes',
          data: [
           11,22,33,44],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['totalUtilisateur', ' totalAnnonces', 'tauxAcceptation', 'utilisateursActifs'],
        datasets: [{
          label: 'Fruits',
          data: [10, 20, 30,20],
          backgroundColor: ['#f87171', '#facc15', '#34d399','#324448'],
        }]
      },
      options: {
        responsive: true
      }
    });




    //test


    this.adminService.getUtilisateurs().subscribe(utilisateurs=>{
            this.utilisateurs=utilisateurs;
    })


    this.adminService.getAnnonces().subscribe(ann=>{
        this.annonces=ann;
        console.log(ann)
    })

  }


  protected readonly range = range;
}
