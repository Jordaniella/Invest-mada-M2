import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reason-card',
  templateUrl: './reason-card.component.html',
  styleUrls: ['./reason-card.component.scss']
})
export class ReasonCardComponent {
  @Input() reason:any = {
    title:'',
    description:'',
    image:{path:''}
  }
} 
