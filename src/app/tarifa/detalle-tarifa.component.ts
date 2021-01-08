import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../service/tarifa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tarifa } from '../models/tarifa';

@Component({
  selector: 'app-detalle-tarifa',
  templateUrl: './detalle-tarifa.component.html',
  styleUrls: ['./detalle-tarifa.component.css']
})
export class DetalleTarifaComponent implements OnInit {

  tarifa: Tarifa = null;

  constructor(
    private tarifaService: TarifaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.tarifaService.detail(id).subscribe(
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
  }

  volver(): void {
    this.router.navigate(['/listaTarifa']);
  }

}
