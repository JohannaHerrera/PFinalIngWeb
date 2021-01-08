import { Component, OnInit } from '@angular/core';
import { VentasService } from '../service/ventas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ventas } from '../models/ventas';

@Component({
  selector: 'app-mas-ventas',
  templateUrl: './mas-ventas.component.html',
  styleUrls: ['./mas-ventas.component.css']
})
export class MasVentasComponent implements OnInit {

  ventas: Ventas = null;

  constructor(
    private ventasService: VentasService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ventasService.detail(13).subscribe(
      data => {
        this.ventas = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaVentas']);
  }

}
