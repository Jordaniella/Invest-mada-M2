import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../modules/app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { TourismComponent } from './tourism/tourism.component';
import { FauneFloreComponent } from './faune-flore/faune-flore.component';
import { BankComponent } from './bank/bank.component';
import { ComercialCalendarContentModule } from '../components/comercial-calendar-content/comercial-calendar-content.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TourismComponent,
    FauneFloreComponent,
    BankComponent,
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    ComercialCalendarContentModule,
    NgxChartsModule,
    NgxPaginationModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BankComponent
  ]
})
export class ViewsModule { }
