import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChart, IOneProduct, ISameMonthProducts } from '../utils/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private URL = "http://localhost:3000/api/invest-mada/procuct/"
  constructor(private http: HttpClient) { }

  getSameMonth = (month: number): Observable<ISameMonthProducts> => {
    return this.http.get<ISameMonthProducts>(this.URL + 'month/' + month)
  }

  getOneProduct = (name: string): Observable<IOneProduct> => {
    return this.http.get<IOneProduct>(this.URL + name);
  }

  getAllName = (): Observable<string[]> => {
    return this.http.get<string[]>(this.URL + "all/name");
  }

  getChartColors = (now: number): Observable<IChart[]> => {
    return this.http.get<IChart[]>(this.URL + `color/${now}`);
  }

  getChartData = (month: number, year: number): Observable<IChart[]> => {
    return this.http.get<IChart[]>(this.URL + `chart/${month}/${year}`);
  }
}
