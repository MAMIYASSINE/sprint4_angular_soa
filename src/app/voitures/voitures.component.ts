import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  voitures!: Voiture[];
     
  constructor(private voitureService: VoitureService) {}
   
  ngOnInit(): void {
    this.chargerVoitures();
  }
    
  chargerVoitures() {
    this.voitureService.listeVoitures().subscribe(voits => {
      console.log(voits);
      this.voitures = voits;
    });
  }
}
