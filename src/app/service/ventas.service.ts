import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ventas } from '../models/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  ventas: Observable<Ventas[]>;

  ventasURL = 'http://localhost:8080/ventas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Ventas[]> {
    return this.httpClient.get<Ventas[]>(this.ventasURL + 'lista');
  }

  public detail(id: number): Observable<Ventas> {
    return this.httpClient.get<Ventas>(this.ventasURL + `detail/${id}`);
  }

  public mensaje(mes1: number, mes2: number): any {
    return this.httpClient.get(this.ventasURL + `message/${mes1}` + `/${mes2}`, { responseType: 'text' });
  }

  public mensaje2(mes1: number, mes2: number): any {
    return this.httpClient.get(this.ventasURL + `message2/${mes1}` + `/${mes2}`, { responseType: 'text' });
  }

  public mensaje3(mes1: number, mes2: number): any {
    return this.httpClient.get(this.ventasURL + `message3/${mes1}` + `/${mes2}`, { responseType: 'text' });
  }

  public mensaje4(mes1: number, mes2: number): any {
    return this.httpClient.get(this.ventasURL + `message4/${mes1}` + `/${mes2}`, { responseType: 'text' });
  }
}