import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarifa } from '../models/tarifa';
import { TarifaService } from '../service/tarifa.service';
import { Compra } from '../models/compra';
import { CompraService } from '../service/compra.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-nuevo-producto-user',
  templateUrl: './nuevo-producto-user.component.html',
  styleUrls: ['./nuevo-producto-user.component.css']
})
export class NuevoProductoUserComponent implements OnInit {

  fecha: Date = null;
  idtarifa: number = null;
  cantidad: number = null;
  total: number = null;
  totalT: number = null;
  precioT: number = null;
  idcompra: number = null;
  tarifaNombre: string;
  id: number;
  nombreUsuario: string;

  fechaCompra: Date = null;
  totalCompra: number = 0;
  observacion: string = "Compra realizada por el usuario";
  idusuario: number = null;

  tarifa: Tarifa = null;
  compras: Compra[];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
    private tarifaService: TarifaService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private compraService: CompraService,
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.idtarifa = this.id;
    this.tarifaService.detail(this.id).subscribe(
        data => {
          this.tarifa = data;
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          this.volver();
        }
    );

    this.nombreUsuario = this.tokenService.getUserName();
    if(this.nombreUsuario == 'johanna2'){
        this.idusuario = 2;
        this.idcompra = 12;
    }
    if(this.nombreUsuario == 'prueba'){
        this.idusuario = 3;
        this.idcompra = 13;
    }
    if(this.nombreUsuario != 'johanna2' && this.nombreUsuario != 'prueba'){
        this.idusuario = 4;
        this.idcompra = 15;
    }
  }

  volver(): void {
    this.router.navigate(['/listaTarifa']);
  }

  pagar(): void {
    const producto = new Producto(this.fecha, this.idtarifa, this.cantidad, this.total, this.idcompra);
    this.productoService.save(producto).subscribe(
        data => {
          this.toastr.success('Compra de Boletos exitosa', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
        }
    );
    this.toastr.success('Su pago se realizó correctamente', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
    });
    this.router.navigate(['/listaCompra']);
  }

  onCreate(): void {
    const producto = new Producto(this.fecha, this.idtarifa, this.cantidad, this.total, this.idcompra);
    this.productoService.save(producto).subscribe(
      data => {
        this.toastr.success('Compra de Boletos Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaTarifa']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  CTotal(cantidad: number){
    this.tarifaService.detail(this.idtarifa).subscribe(datos => {
      this.precioT = datos.precio;
    })
    this.totalT = this.precioT * cantidad;
    this.total = this.totalT;
  }
}
