import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TyperComponent } from './typer/typer.component';
import { ButtonFeatureComponent } from './button-feature/button-feature.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    TyperComponent,
    ButtonFeatureComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TyperComponent,
    ButtonFeatureComponent,
    CarouselComponent
  ]
})
export class FeatureImageModule { }
