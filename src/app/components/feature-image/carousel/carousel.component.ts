import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  images_desk = [
    {
      path: 'assets/carousel/fond_1.jpg',
    },
    {
      path: 'assets/carousel/fond_2.jpeg',
    },
    {
      path: 'assets/carousel/fond_4.jpg',
    },
    {
      path: 'assets/carousel/fond_3.jpg',
    },
    {
      path: 'assets/carousel/fond_5.jpg',
    },
    {
      path: 'assets/carousel/fond_6.jpg',
    },
    {
      path: 'assets/carousel/fond_7.jpg',
    },
  ];
}
