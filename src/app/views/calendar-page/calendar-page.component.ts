import { Component, OnInit } from '@angular/core';
import { Observable, filter, take } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { MenusServices } from 'src/app/services/header.service';
import { IChart, ISameMonthProducts } from 'src/app/utils/product.interface';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.scss']
})
export class CalendarPageComponent implements OnInit {
  title: string[] = ['Ne manquez plus aucune', 'opportunité commerciale', `avec notre calendrier ${new Date().getFullYear()} !`];
  textContent: string[] = [
    'Le calendrier commercial est un outil indispensable pour toute entreprise cherchant à développer ses ventes.',
    'En utilisant notre calendrier commercial, vous pouvez planifier vos campagnes publicitaires et vos promotions en avance, maximisant ainsi vos chances de succès.'
  ];
  options = [2022, 2021, 2020, 2019, 2018, 2017];
  ngDropdown = this.options[0];

  productData$: Observable<IChart[]>;
  colors$: Observable<IChart[]>;
  productsList$: Observable<ISameMonthProducts>;
  counter: number[];

  monthList: string[] = [];
  month: number;
  filterItem: IFilter = { title: "", type: "" };

  constructor(private calendarSrvc: CalendarService,
    private productService: CalendarService,
    private monthService: MenusServices) { }

  ngOnInit(): void {
    this.month = new Date().getMonth();
    this.monthService
      .getMonth()
      .pipe(take(1))
      .subscribe((res) => (this.monthList = res));
    this.productsList$ = this.productService.getSameMonth(this.month);
    this.productsList$.subscribe(res => { this.counter = res.counter });
    this.getColors();
    this.getChartData();
  }


  addCatFilter = (name: string) => {
    this.filterItem.title = name;
    this.filterItem.type = "Category";
  }

  getColors = () => {
    this.colors$ = this.calendarSrvc.getChartColors(this.month);
  }

  getChartData = () => {
    this.productData$ = this.calendarSrvc.getChartData(this.month, this.ngDropdown);
  }

  getPrevMonth = () => {
    this.month = this.month - 1 < 0 ? 11 : this.month - 1;
    this.actualiseProductList(this.month);
  };
  getNextMonth = () => {
    this.month = this.month + 1 > 11 ? 0 : this.month + 1;
    this.actualiseProductList(this.month);
  };
  selectAMonth = () => {
    return this.monthList[this.month];
  };

  actualiseProductList = (value: number) => {
    this.productsList$ = this.productService.getSameMonth(this.month);
    this.getColors();
    this.getChartData();
  }
}

interface IFilter {
  title: string;
  type: string;
}