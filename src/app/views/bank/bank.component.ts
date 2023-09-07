import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BankService } from 'src/app/services/bank.service';
import { IBank } from 'src/app/utils/bank.interface';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit{
  
  allBanks$:Observable<IBank[]>;
  constructor(private bankService: BankService){}
  ngOnInit(): void {
    this.allBanks$ = this.bankService.getAllBank();
    this.bankService.getAllBank().subscribe(res => console.log(res));
  }

}
