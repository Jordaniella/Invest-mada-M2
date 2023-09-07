import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MenusServices } from 'src/app/services/header.service';
import { IMenus } from 'src/app/utils/menus.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private menuService: MenusServices,
    private resp: BreakpointObserver
  ) {}
  Menus: IMenus[] = [];

  burgerActive: boolean = false;
  phoneMode: boolean = false;
  dropdownActive: boolean[] = [false, false, false, false, false, false];
  mode:boolean = false;
  ngOnInit(): void {
    // =============== Récupère la liste des menus dans le datas ================= //
    this.menuService.getMenus().subscribe((menus) => {
      this.Menus = menus;
    });

    // =============== Pour la RESPONSIVITE =============================== /
    this.responsivity();

    this.changeMode();
  }

  responsivity = () => {
    this.resp
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        const breakpoint = result.breakpoints;
        this.phoneMode = false;
        if (breakpoint[Breakpoints.Small] || breakpoint[Breakpoints.XSmall]) {
          this.phoneMode = true;
        }
      });
  };

  setMenuActive = (id: number) => {
    this.Menus.forEach((element) => {
      if (element.id === id) element.status = true;
      else element.status = false;
    });
    if(!this.Menus[7].status) this.dropdownActive = [false, false, false, false, false, false]
  };

  setMenuDropdownActive = (idDropdown: number) => {
    
      for (let i = 0; i < this.dropdownActive.length; i++) {
        if (i === idDropdown) this.dropdownActive[i] = true;
        else this.dropdownActive[i] = false;
      }
    
  };

  changeMode = () => {
    this.mode = !this.mode;
    if(!this.mode) document.body.classList.toggle("dark");
    else document.body.classList.remove("dark");
  }
}
