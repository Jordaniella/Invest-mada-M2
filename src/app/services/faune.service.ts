import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFaune } from '../utils/faune.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FauneService {

  private URL:string = "http://localhost:3000/api/invest-mada/bio/";
  constructor(private http: HttpClient) { }

  getAllBio = (): Observable<IFaune[]> => {
    return this.http.get<IFaune[]>(this.URL);
  }
}
