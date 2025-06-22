import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DemandeReqDTO {
  demandeId?: number;
  dimensions: string;
  type: string;
  poids: string;
  description: string;
  status: string;
  expediteurEmail: string;
  annonceId: number;
}

export interface DemandeDTO {
  demandeId: number;
  description: string;
  status: string;
  date: string;
  // ajoutez d'autres champs selon votre DemandeDTO
}

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  private baseUrl = 'http://localhost:8080/api/demandes'; // ajustez selon votre backend

  constructor(private http: HttpClient) {}

  createDemandeWithColis(demande: DemandeReqDTO): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}`, demande);
  }

  getDemandesByExpediteur(email: string): Observable<DemandeDTO[]> {
    return this.http.post<DemandeDTO[]>(`${this.baseUrl}/${email}`, {});
  }
}
