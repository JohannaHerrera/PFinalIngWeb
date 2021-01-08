import { Component, OnInit } from '@angular/core';
import { VentasService } from '../service/ventas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ventas } from '../models/ventas';

@Component({
  selector: 'app-comparar-ventas',
  templateUrl: './comparar-ventas.component.html',
  styleUrls: ['./comparar-ventas.component.css']
})
export class CompararVentasComponent implements OnInit {

  mes1: number;
  mes2:  number;
  ventas: Ventas[] = [];
  meses: Ventas[] = [];
  venta1: Ventas = null;
  venta2: Ventas = null;
  venta3: Ventas = null;
  venta4: Ventas = null;
  venta5: Ventas = null;
  venta6: Ventas = null;
  venta7: Ventas = null;
  venta8: Ventas = null;
  venta9: Ventas = null;
  venta10: Ventas = null;
  venta11: Ventas = null;
  venta12: Ventas = null;

  constructor(
    private ventasService: VentasService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.mes1 = this.activatedRoute.snapshot.params['mes1'];
    this.mes2 = this.activatedRoute.snapshot.params['mes2'];
    this.comparar(this.mes1, this.mes2);
  }

  volver(): void {
    this.router.navigate(['/listaVentas']);
  }

  public comparar(mes1: number, mes2: number): void{
    this.ventasService.detail(mes1).subscribe(
      data => {
        this.venta1 = data;
      },
    );

    this.ventasService.detail(mes2).subscribe(
      data => {
        this.venta2 = data;
      },
    );
    
    /*for (let index = 1; index < 13; index++) {
      
      if (this.ventas[index].mes == 1 || this.ventas[index].mes == 3){
        this.meses.push(this.ventas[index])
      }
      if (this.ventas[index].mes > 1 && this.ventas[index].mes < 3){
        this.meses.push(this.ventas[index])
      }
    }*/
  }
}
