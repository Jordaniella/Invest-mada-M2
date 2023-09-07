import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menus-card',
  templateUrl: './menus-card.component.html',
  styleUrls: ['./menus-card.component.scss']
})
export class MenusCardComponent {
  @Input() menu:any = {
    icone:'',
    title:'',
    link:''
  }
}
