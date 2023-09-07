import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMembers, IMenus } from '../utils/menus.interface';

@Injectable({
  providedIn: 'root',
})
export class MenusServices {
  private URL_JSON: string = '/assets/data/';
  constructor(private http: HttpClient) {}

  getMenus(): Observable<IMenus[]> {
    let currentUrl = this.URL_JSON + 'menus.json';
    return this.http.get<IMenus[]>(currentUrl);
  }

  getMonth(): Observable<string[]> {
    let currentUrl = this.URL_JSON + 'month.json';
    return this.http.get<string[]>(currentUrl);
  }
  getMembers(): Observable<IMembers[]> {
    let currentUrl = this.URL_JSON + 'members.json';
    return this.http.get<IMembers[]>(currentUrl);
  }
}
