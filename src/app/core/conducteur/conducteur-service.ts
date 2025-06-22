import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AnnonceDTO {
  id: number;
  depart: string;
  etapes: string[];
  arrivee: string;
  type: string;
  capacite: string;
  status: string;
  conducteurId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private baseUrl = 'http://localhost:8080/api/annonces'; // ajustez selon votre config

  constructor(private http: HttpClient) {}

  createAnnonce(annonce: AnnonceDTO): Observable<AnnonceDTO> {
    return this.http.post<AnnonceDTO>(`${this.baseUrl}`, annonce);
  }

  updateAnnonce(annonce: AnnonceDTO): Observable<AnnonceDTO> {
    return this.http.put<AnnonceDTO>(`${this.baseUrl}`, annonce);
  }

  getAnnoncesByConducteur(conducteurId: number): Observable<AnnonceDTO[]> {
    return this.http.get<AnnonceDTO[]>(`${this.baseUrl}/conducteur/${conducteurId}`);
  }
}
