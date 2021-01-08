import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../service/tarifa.service';
import { Tarifa } from '../models/tarifa';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-tarifa',
  templateUrl: './nuevo-tarifa.component.html',
  styleUrls: ['./nuevo-tarifa.component.css']
})
export class NuevoTarifaComponent implements OnInit {

  nombre = '';
  descripcion = '';
  precio: number = null;

  constructor(
    private tarifaService: TarifaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const tarifa = new Tarifa(this.nombre, this.descripcion, this.precio);
    this.tarifaService.save(tarifa).subscribe(
      data => {
        this.toastr.success('Tarifa Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaTarifa']);
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
