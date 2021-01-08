import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tarifa } from '../models/tarifa';
import { TarifaService } from '../service/tarifa.service';
import { Compra } from '../models/compra';
import { CompraService } from '../service/compra.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto: Producto = null;
  idT: number = null;
  totalT: number = null;
  precioT: number = null;

  idtarifa: number;
  idcompra: number;
  cantidad: number;

  tarifas: Tarifa[];
  compras: Compra[];

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
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
    });
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data; 
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.producto.idtarifa = this.idtarifa;
    this.producto.idcompra = this.idcompra;
    this.producto.total = this.totalT;
    this.producto.cantidad = this.cantidad;
    this.productoService.update(id, this.producto).subscribe(
      data => {
        this.toastr.success('Compra de Boleto Actualizado', 'OK', {
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
    this.idT = this.idtarifa;
    this.tarifaService.detail(this.idT).subscribe(datos => {
      this.precioT = datos.precio;
    })
    this.totalT = this.precioT * cantidad;
  }
}
