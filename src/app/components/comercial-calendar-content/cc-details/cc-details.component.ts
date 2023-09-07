import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { IOneProduct } from 'src/app/utils/product.interface';

@Component({
  selector: 'app-cc-details',
  templateUrl: './cc-details.component.html',
  styleUrls: ['./cc-details.component.scss']
})
export class CcDetailsComponent implements OnInit, OnChanges{
  constructor (private productService : CalendarService) {}
  selectedProduct$:Observable<IOneProduct>;

  @Input() name : string;
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.name !== "") this.selectedProduct$ = this.productService.getOneProduct(this.name);
  }
  ngOnInit(): void {
    if(this.name !== "") this.selectedProduct$ = this.productService.getOneProduct(this.name);
  }
}
