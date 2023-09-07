import { Component, Input } from '@angular/core';
import { IFaune } from 'src/app/utils/faune.interface';

@Component({
  selector: 'app-faune-flore-card',
  templateUrl: './faune-flore-card.component.html',
  styleUrls: ['./faune-flore-card.component.scss']
})
export class FauneFloreCardComponent {
  @Input()pieces : IFaune;
}
