import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL: string = 'http://localhost:8081/voitures/api';

  voitures: Voiture[]=[];
  voiture!: Voiture;

  constructor(private http: HttpClient) { }

  listeVoitures(): Observable<Voiture[]> {
    
    return this.http.get<Voiture[]>(this.apiURL+"/all"); 
  }
}