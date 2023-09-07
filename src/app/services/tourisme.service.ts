import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITourisme } from '../utils/tourisme.inteerface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourismeService {

  private URL: string = 'http://localhost:3000/api/invest-mada/tourisme/';
  constructor(private http: HttpClient) { }

  getTouristicSite = ():Observable<ITourisme[]> => {
    return this.http.get<ITourisme[]>(this.URL);
  }
}
