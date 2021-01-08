import { Component, OnInit } from '@angular/core';
import { Tarifa } from '../models/tarifa';
import { TarifaService } from '../service/tarifa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-tarifa',
  templateUrl: './editar-tarifa.component.html',
  styleUrls: ['./editar-tarifa.component.css']
})
export class EditarTarifaComponent implements OnInit {

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
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.tarifaService.update(id, this.tarifa).subscribe(
      data => {
        this.toastr.success('Tarifa Actualizada', 'OK', {
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
