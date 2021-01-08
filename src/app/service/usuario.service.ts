import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'lista');
  }
}