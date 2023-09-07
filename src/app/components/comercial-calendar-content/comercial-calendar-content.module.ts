import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarProductsComponent } from './calendar-products/calendar-products.component';
import { CcDetailsComponent } from './cc-details/cc-details.component';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterCalendarComponent } from './filter-calendar/filter-calendar.component';
import { ModalProductComponent } from './modal-product/modal-product.component';



@NgModule({
  declarations: [
    CalendarProductsComponent,
    CcDetailsComponent,
    FilterCalendarComponent,
    ModalProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    CalendarProductsComponent,
    CcDetailsComponent,
    FilterCalendarComponent
  ]
})
export class ComercialCalendarContentModule { }
