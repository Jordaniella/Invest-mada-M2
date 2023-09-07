import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureImageComponent } from './feature-image/feature-image.component';
import { FeatureImageModule } from './feature-image/feature-image.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { SharedModule } from '../shared/shared.module';
import { HomeContentModule } from './home-content/home-content.module';
import { AboutCardComponent } from './about-card/about-card.component';
import { TourismCardComponent } from './tourism-card/tourism-card.component';
import { AppRoutingModule } from '../modules/app-routing.module';
import { FauneFloreCardComponent } from './faune-flore-card/faune-flore-card.component';
import { BankCardComponent } from './bank-card/bank-card.component';
import { ComercialCalendarContentModule } from './comercial-calendar-content/comercial-calendar-content.module';



@NgModule({
  declarations: [
    FeatureImageComponent,
    HomeContentComponent,
    AboutCardComponent,
    TourismCardComponent,
    FauneFloreCardComponent,
    BankCardComponent
  ],
  imports: [
    CommonModule,
    FeatureImageModule,
    SharedModule,
    HomeContentModule,
    AppRoutingModule,
    ComercialCalendarContentModule
  ],
  exports: [
    FeatureImageComponent,
    HomeContentComponent,
    AboutCardComponent,
    TourismCardComponent,
    FauneFloreCardComponent,
    BankCardComponent
  ]
})
export class ComponentsModule { }
