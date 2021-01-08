import { Component, OnInit } from '@angular/core';
import { CompraService } from '../service/compra.service';
import { Compra } from '../models/compra';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-compra',
  templateUrl: './nuevo-compra.component.html',
  styleUrls: ['./nuevo-compra.component.css']
})
export class NuevoCompraComponent implements OnInit {

    fecha: Date = null;
    total: number = 0;
    observacion: string = null;
    idusuario: number = null;

    usuarios: Usuario[];

  constructor(
    private compraService: CompraService,
    private toastr: ToastrService,
    private router: Router,
    private usuarioService: UsuarioService,
    ) { }

  ngOnInit() {
    this.usuarioService.lista().subscribe(datos => {
      this.usuarios = datos;
    });
  }

  onCreate(): void {
    const compra = new Compra(this.fecha, this.total, this.observacion, this.idusuario);
    this.compraService.save(compra).subscribe(
      data => {
        this.toastr.success('Factura Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaCompra']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
