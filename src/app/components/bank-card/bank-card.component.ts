import { Component, Input } from '@angular/core';
import { IBank } from 'src/app/utils/bank.interface';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent {

  @Input() bank : IBank;
}
