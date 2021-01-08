import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  compraURL = 'http://localhost:8080/compra/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(this.compraURL + 'lista');
  }

  public listaUser(user: string): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(this.compraURL + `listaUser/${user}`);
  }

  public detail(id: number): Observable<Compra> {
    return this.httpClient.get<Compra>(this.compraURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Compra> {
    return this.httpClient.get<Compra>(this.compraURL + `detailname/${nombre}`);
  }

  public save(compra: Compra): Observable<any> {
    return this.httpClient.post<any>(this.compraURL + 'create', compra);
  }

  public update(id: number, compra: Compra): Observable<any> {
    return this.httpClient.put<any>(this.compraURL + `update/${id}`, compra);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.compraURL + `delete/${id}`);
  }
}
