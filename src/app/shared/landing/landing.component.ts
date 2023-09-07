import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  @Input()images:string= "assets/carousel/calendar.webp";
  @Input() title:string[] = [];
  @Input() content:string[] = [];
  @Input() miniTitle:string = "";
  @Input() gain:number[] = [];
  
}
