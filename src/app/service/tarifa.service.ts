import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  tarifaURL = 'http://localhost:8080/tarifa/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Tarifa[]> {
    return this.httpClient.get<Tarifa[]>(this.tarifaURL + 'lista');
  }

  public detail(id: number): Observable<Tarifa> {
    return this.httpClient.get<Tarifa>(this.tarifaURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Tarifa> {
    return this.httpClient.get<Tarifa>(this.tarifaURL + `detailname/${nombre}`);
  }

  public save(tarifa: Tarifa): Observable<any> {
    return this.httpClient.post<any>(this.tarifaURL + 'create', tarifa);
  }

  public update(id: number, tarifa: Tarifa): Observable<any> {
    return this.httpClient.put<any>(this.tarifaURL + `update/${id}`, tarifa);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.tarifaURL + `delete/${id}`);
  }
}