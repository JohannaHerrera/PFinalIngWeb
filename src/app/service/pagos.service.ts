import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagos } from '../models/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  pagosURL = 'http://localhost:8080/pagos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Pagos[]> {
    return this.httpClient.get<Pagos[]>(this.pagosURL + 'lista');
  }
}