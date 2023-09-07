import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ISameMonthProducts,
} from 'src/app/utils/product.interface';

@Component({
  selector: 'app-calendar-products',
  templateUrl: './calendar-products.component.html',
  styleUrls: ['./calendar-products.component.scss'],
})
export class CalendarProductsComponent implements OnInit, OnChanges {

  filterList : IFilter[] = [];
  @Input() filterItem : IFilter;
  //====================== Variables pour les produits START ================================//
  @Input() productsList$: Observable<ISameMonthProducts>;
  selectedProduct: string = '';
  productList : ISameMonthProducts;
  p:number = 1;
  itemPerPage:number = 8;
  //====================== Variables pour les produits END ================================//

  constructor() {}

  ngOnInit(): void {
    this.productsList$.subscribe(res => {
      this.productList = res;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
      var newFilter = this.filterItem;
      this.filterList.push(newFilter);
  }
  //==================== Products function START ===========================//
  getSelectedProduct = (name: string) => {
    this.selectedProduct = name;
  };

  removeAllFilter = () => this.filterList = [];
  //==================== Products function END ===========================//

  checkDataFilter= ():boolean => {
    if(this.filterItem.title == '') return false;
    else if (this.filterList.length <=0) return false;
    else return true;
  }

  getPages = () => {
    var result  = this.productList.products.length / this.itemPerPage;
    result = (Math.round(result) < result)? Math.floor(result) + 1 : Math.round(result);
    
    return result;
  }

  addFilter = (title:string, type:string) => {
    var res = {title:title, type:type};
    this.filterList.push(res);
  }
  removeFilter = (index:number) => {
    this.filterList.splice(index,1);
  }

}
interface IFilter {
  title: string;
  type:string;
}