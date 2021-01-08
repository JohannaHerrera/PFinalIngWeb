import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Tarifa } from '../models/tarifa';
import { TarifaService } from '../service/tarifa.service';
import { Compra } from '../models/compra';
import { CompraService } from '../service/compra.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  fecha: Date = null;
  idtarifa: number = null;
  cantidad: number = null;
  total: number = null;
  totalT: number = null;
  precioT: number = null;
  idcompra: number = null;

  tarifas: Tarifa[];
  compras: Compra[];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
    private tarifaService: TarifaService,
    private compraService: CompraService,
    ) { }

  ngOnInit() {
    this.tarifaService.lista().subscribe(datos => {
      this.tarifas = datos;
    });
    this.compraService.lista().subscribe(compras => {
      this.compras = compras;
    })
  }

  onCreate(): void {
    const producto = new Producto(this.fecha, this.idtarifa, this.cantidad, this.total, this.idcompra);
    this.productoService.save(producto).subscribe(
      data => {
        this.toastr.success('Compra de Boletos Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
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
