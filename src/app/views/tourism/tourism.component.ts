import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TourismeService } from 'src/app/services/tourisme.service';
import { ITourisme } from 'src/app/utils/tourisme.inteerface';

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.scss']
})
export class TourismComponent implements OnInit {
  constructor(private tourService: TourismeService){}
  title:string[]=['DECOUVREZ LES MERVEILLES DE MADAGASCAR : ','une expérience inoubliable ','pour les amoureux de la nature et de la culture'];
  textContent:string []=[
    "Madagascar, une île paradisiaque à la beauté sauvage et inaltérée, est une destination de rêve pour les amoureux de la nature et les passionnés d'aventure.",
    "Avec ses paysages à couper le souffle, sa biodiversité unique et sa culture fascinante, Madagascar offre une expérience de voyage inoubliable.",
    "Découvrez ce joyau de l'Océan Indien et laissez-vous transporter dans un monde de couleurs, de saveurs et de sensations nouvelles."
  ];

  allSite$ : Observable<ITourisme[]>;

  ngOnInit(): void {
    this.allSite$ = this.tourService.getTouristicSite();
  }
}
