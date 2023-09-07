import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBank } from '../utils/bank.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private URL = "http://localhost:3000/api/invest-mada/banque/"
  constructor(private http: HttpClient) { }

  getAllBank = ():Observable<IBank[]> => {
    return this.http.get<IBank[]>(this.URL);
  }

}
