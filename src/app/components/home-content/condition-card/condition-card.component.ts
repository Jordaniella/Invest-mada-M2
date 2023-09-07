import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-condition-card',
  templateUrl: './condition-card.component.html',
  styleUrls: ['./condition-card.component.scss']
})
export class ConditionCardComponent {
  @Input() item:any = {
    title:'',
    icon:'',
    link:'',
    description:'',
    contentLink:''
  }
}
