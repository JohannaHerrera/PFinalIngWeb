import { Component, OnInit } from '@angular/core';
import { Compra } from '../models/compra';
import { CompraService } from '../service/compra.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {

  compras: Compra[] = [];
  roles: string[];
  isAdmin = false;
  nombreUsuario = '';

  constructor(
    private compraService: CompraService,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarCompras();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarCompras(): void {
    this.nombreUsuario = this.tokenService.getUserName();
    if(this.nombreUsuario == 'johanna'){
      this.compraService.lista().subscribe(
        data => {
          this.compras = data;
        },
        err => {
          console.log(err);
        }
      );
    }
    else{
      this.compraService.listaUser(this.nombreUsuario).subscribe(
        data => {
          this.compras = data;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  borrar(id: number) {
    this.compraService.delete(id).subscribe(
      data => {
        this.toastr.success('Factura Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCompras();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
