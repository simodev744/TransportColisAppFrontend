import {Component, inject, OnInit} from '@angular/core';
import {AdminService} from '../../../core/admin/admin-service';
import {Utilistaeur} from '../../../models/Utilisateur';

@Component({
  selector: 'app-liste-utilisteurs',
  imports: [],
  templateUrl: './liste-utilisteurs.html',
  styleUrl: './liste-utilisteurs.css'
})
export class ListeUtilisteurs implements OnInit{

  private utilisateurs: Utilistaeur[]=[];
  private adminService=inject(AdminService);

  ngOnInit(): void {
    this.adminService.getUtilisateurs().subscribe(utilisateurs=>{
      this.utilisateurs=utilisateurs;
    })
    }




}
