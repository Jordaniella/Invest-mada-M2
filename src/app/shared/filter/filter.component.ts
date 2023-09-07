import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { MenusServices } from 'src/app/services/header.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  allName$ : Observable<string[]>;
  filter : FilterModel[];
  activeFilter : boolean = false;
  
  allCat : IMenusFilter[] = [
    {
      image: 'assets/categorie/fruits.jpg',
      name: 'Fruits',
    },
    {
      image: 'assets/categorie/riz.jpg',
      name: 'Poacées (riz,...)',
    },
    {
      image: 'assets/categorie/fruits-ou-legumes.jpg',
      name: 'Légumes',
    },
    {
      image: 'assets/categorie/épices.jpg',
      name: 'Epices',
    },
    {
      image: 'assets/categorie/légumineuse.jpeg',
      name: 'Légumineuses (Haricot, Soja, ...)',
    },
    {
      image:
        'assets/categorie/plante et fleur 1.jpg',
      name: 'Plantes et fleurs',
    },
    {
      image: 'assets/categorie/café.jpg',
      name: 'Autres ...',
    },
  ];

  constructor(private productSrvc: CalendarService){}
  ngOnInit(): void {
    this.allName$ = this.productSrvc.getAllName();
  }

  addName = (name:string) => {
    this.addFilter(name, "");
  }
  
  showFilter = () => {
    this.activeFilter = !this.activeFilter;
  }
  addCategorie = (cat:string) => {
    this.addFilter("", cat);
  }


  addFilter = (name:string, cat:string) => {
    this.filter.push({name: name, categorie: cat});
  }
}
interface FilterModel {
  name: string;
  categorie: string;
}
interface IMenusFilter{
  name:string;
  image:string;
}