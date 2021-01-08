import { Component, OnInit } from '@angular/core';
import { Compra } from '../models/compra';
import { CompraService } from '../service/compra.service';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent implements OnInit {

  idusuario: number = null;

  compra: Compra = null;
  usuarios: Usuario[];

  constructor(
    private compraService: CompraService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.usuarioService.lista().subscribe(datos => {
      this.usuarios = datos;
    });
    
    const id = this.activatedRoute.snapshot.params.id;
    this.compraService.detail(id).subscribe(
      data => {
        this.compra = data;
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
    this.compra.idusuario = this.idusuario;
    this.compraService.update(id, this.compra).subscribe(
      data => {
        this.toastr.success('Factura Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaCompra']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}
