import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ITourisme } from 'src/app/utils/tourisme.inteerface';

@Component({
  selector: 'app-tourism-card',
  templateUrl: './tourism-card.component.html',
  styleUrls: ['./tourism-card.component.scss']
})
export class TourismCardComponent implements OnInit, OnDestroy{
  @Input() site:ITourisme;
  counter : number = 0;
  image:string = '';

  getImageCarousel = () =>{
    if(this.counter === this.site.galerie.length) {
      this.counter = 0;
    }
    this.image = this.site.galerie[this.counter++];
  }
  interval = setInterval(this.getImageCarousel,6000);

  ngOnInit(): void {
    this.image = this.site.galerie[this.counter];
  }
  
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
