import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners/partners.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { PrevNextComponent } from './prev-next/prev-next.component';
import { FilterComponent } from './filter/filter.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({  
  declarations: [
    PartnersComponent,
    LandingComponent,
    CarouselCardComponent,
    PrevNextComponent,
    FilterComponent,
    FilterMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PartnersComponent,
    LandingComponent,
    CarouselCardComponent,
    PrevNextComponent,
    FilterComponent,
    FilterMenuComponent
  ]
})
export class SharedModule { }
