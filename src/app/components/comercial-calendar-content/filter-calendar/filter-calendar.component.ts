import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-calendar',
  templateUrl: './filter-calendar.component.html',
  styleUrls: ['./filter-calendar.component.scss']
})
export class FilterCalendarComponent {

  allCat : IMenusFilter[] = [
    {
      image: 'assets/categorie/fruits.jpg',
      name: 'Fruits',
      isSelected: false
    },
    {
      image: 'assets/categorie/riz.jpg',
      name: 'Poacées',
      isSelected: false
    },
    {
      image: 'assets/categorie/fruits-ou-legumes.jpg',
      name: 'Légumes',
      isSelected: false
    },
    {
      image: 'assets/categorie/épices.jpg',
      name: 'Epices',
      isSelected: false
    },
    {
      image: 'assets/categorie/légumineuse.jpeg',
      name: 'Légumineuses',
      isSelected: false
    },
    {
      image:
        'assets/categorie/plante et fleur 1.jpg',
      name: 'Plantes et fleurs',
      isSelected: false
    },
    {
      image: 'assets/categorie/café.jpg',
      name: 'Autres ...',
      isSelected: false
    },
  ];

  @Output() catSelected : EventEmitter<string> = new EventEmitter<string>();

  selectCategory = (title: string) => {
    this.allCat.forEach(element => {
      if(element.name == title) element.isSelected = true;
      else element.isSelected = false;
    });
    this.catSelected.emit(title);
  }
}

interface IMenusFilter{
  name:string;
  image:string;
  isSelected:boolean
}