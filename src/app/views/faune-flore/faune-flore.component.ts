import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FauneService } from 'src/app/services/faune.service';
import { IFaune } from 'src/app/utils/faune.interface';

@Component({
  selector: 'app-faune-flore',
  templateUrl: './faune-flore.component.html',
  styleUrls: ['./faune-flore.component.scss']
})
export class FauneFloreComponent implements OnInit, OnDestroy{
  constructor(private fauneService : FauneService){}
  title:string[] = ["UN PARADIS NATUREL A PRESERVER : explorer la ","biodiversité extraordinaire"," de Madagascar"];
  textContent:string[]=[
    "Cette île unique abrite une biodiversité exceptionnelle avec des espèces endémiques que l'on ne trouve nulle part ailleurs.",
    "Des lémuriens aux caméléons, en passant par les baobabs majestueux, Madagascar offre un spectacle naturel incomparable.",
    "Plongez-vous dans cette merveilleuse diversité et découvrez les trésors cachés de la faune et de la flore malgaches, témoins d'une richesse écologique à préserver pour les générations futures."
  ]

  allFaune : IFaune[];
  p:number = 1;
  itemPerPage : number = 8;
  ngOnInit(): void {
    this.fauneService.getAllBio().subscribe((res) => {
      this.allFaune = res;
    })
  }
  ngOnDestroy(): void {
  }
}
