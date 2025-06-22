import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilistaeur} from '../../models/Utilisateur';
import {Annonce} from '../../models/Annonce';
import {stat} from '../../models/stats';



@Injectable({
  providedIn: 'root'
})
export class AdminService  {
  private api:string="http://localhost:8080/api/admin";
  private http=inject(HttpClient);

  getStats(){
     return this.http.get<stat>(this.api+"/stats");
  }

//utilisateurs--->admin

  getUtilisateurs(){
    return this.http.get<Utilistaeur[]>(this.api+"/utilisateurs");
  }

  getUtilisateurbyId(id:bigint){
    return this.http.get<Utilistaeur>(this.api+"/utilisateurs/"+id);
  }
  deleteUtilisateurbyId(id:bigint){
    return this.http.delete(this.api+"/utilisateurs/"+id);
  }

  //Anonces


  getAnnonces(){
    return this.http.get<Annonce[]>(this.api+"/annonces");

  }

  getAnnonceById(id:number){
    return this.http.get<Annonce>(this.api+"/annonces/"+id);
  }

 deleteAnnonce(id:number){
   return this.http.delete<Annonce>(this.api+"/annonces/"+id);
 }



}
