import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReasonCardComponent } from './reason-card/reason-card.component';
import { ProcessCardComponent } from './process-card/process-card.component';
import { MenusCardComponent } from './menus-card/menus-card.component';
import { ConditionCardComponent } from './condition-card/condition-card.component';
import { AppRoutingModule } from 'src/app/modules/app-routing.module';



@NgModule({
  declarations: [
    ReasonCardComponent,
    ProcessCardComponent,
    MenusCardComponent,
    ConditionCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ReasonCardComponent,
    ProcessCardComponent,
    MenusCardComponent,
    ConditionCardComponent
  ]
})
export class HomeContentModule { }
