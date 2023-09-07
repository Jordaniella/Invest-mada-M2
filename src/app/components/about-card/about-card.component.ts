import { Component, Input } from '@angular/core';
import { IMembers } from 'src/app/utils/menus.interface';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  @Input() member : IMembers = {
    photo:'',
    name:'',
    description:''
  }
}
