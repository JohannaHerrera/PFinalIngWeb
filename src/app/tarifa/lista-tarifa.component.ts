import { Component, OnInit } from '@angular/core';
import { Tarifa } from '../models/tarifa';
import { TarifaService } from '../service/tarifa.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-tarifa',
  templateUrl: './lista-tarifa.component.html',
  styleUrls: ['./lista-tarifa.component.css']
})
export class ListaTarifaComponent implements OnInit {

  tarifas: Tarifa[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private tarifaService: TarifaService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarTarifas();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarTarifas(): void {
    this.tarifaService.lista().subscribe(
      data => {
        this.tarifas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.tarifaService.delete(id).subscribe(
      data => {
        this.toastr.success('Tarifa Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarTarifas();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
