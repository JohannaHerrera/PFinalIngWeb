import { Component, OnInit } from '@angular/core';
import { Ventas } from '../models/ventas';
import { VentasService } from '../service/ventas.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagos } from '../models/pagos';
import { PagosService } from '../service/pagos.service';

@Component({
  selector: 'app-lista-ventas',
  templateUrl: './lista-ventas.component.html',
  styleUrls: ['./lista-ventas.component.css']
})
export class ListaVentasComponent implements OnInit {

  ventas: Ventas[] = [];
  pagos: Pagos[] = [];
  roles: string[];
  isAdmin = false;
  mesStart: number = 0;
  mesEnd: number = 0;
  mesSelect1: number = 0;
  mesSelect2: number = 0;
  i: number = 0;
  mensaje: string = "";
  mensaje2: string = "";
  result: number = 1;

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
    private pagosService: PagosService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.venta1 = new Ventas("Ningún filtro seleccionado", 0, 0)
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

    this.pagosService.lista().subscribe(
      data => {
        this.pagos = data;
      },
    );
  }

  cargarVentas(): void {
    this.ventasService.lista().subscribe(
      data => {
        this.ventas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onSelect(value){
    if(value == "0"){
      this.cargarVentas();
      this.venta1 = null;
      this.venta2 = null;
      this.venta3 = null;
      this.venta4 = null;
      this.venta5 = null;
      this.venta6 = null;
      this.venta7 = null;
      this.venta8 = null;
      this.venta9 = null;
      this.venta10 = null;
      this.venta11 = null;
      this.venta12 = null;
      this.mesSelect1 = 0;
      this.mesSelect2 = 0;
      if(this.result == 1){
        this.menssage(1, 12);
        this.menssage2(1, 12);
      }
      else{
        this.menssage3(1, 12);
        this.menssage4(1, 12);
      }
    }
    if(value == "1"){
      this.router.navigate(['/masVentas']);
    }

    if(value == "2"){
      this.router.navigate(['/menosVentas']);
    }
    
    return false
  }

  cargarMes(mes: number){
    this.ventasService.detail(mes).subscribe(
      data => {
        if(mes == 1){
          this.venta1 = data;
        }
        if(mes == 2){
          this.venta2 = data;
        }
        if(mes == 3){
          this.venta3 = data;
        }
        if(mes == 4){
          this.venta4 = data;
        }
        if(mes == 5){
          this.venta5 = data;
        }
        if(mes == 6){
          this.venta6 = data;
        }
        if(mes == 7){
          this.venta7 = data;
        }
        if(mes == 8){
          this.venta8 = data;
        }
        if(mes == 9){
          this.venta9 = data;
        }
        if(mes == 10){
          this.venta10 = data;
        }
        if(mes == 11){
          this.venta11 = data;
        }
        if(mes == 12){
          this.venta12 = data;
        }
      },
    );
  }

  mes1(value): void{
    this.ventas = null;
    this.venta1 = null;
    this.venta2 = null;
    this.venta3 = null;
    this.venta4 = null;
    this.venta5 = null;
    this.venta6 = null;
    this.venta7 = null;
    this.venta8 = null;
    this.venta9 = null;
    this.venta10 = null;
    this.venta11 = null;
    this.venta12 = null;
    if(value == "1"){
      this.mesSelect1 = 1;
    }
    if(value == "2"){
      this.mesSelect1 = 2;
    }
    if(value == "3"){
      this.mesSelect1 = 3;
    }
    if(value == "4"){
      this.mesSelect1 = 4;
    }
    if(value == "5"){
      this.mesSelect1 = 5;
    }
    if(value == "6"){
      this.mesSelect1 = 6;
    }
    if(value == "7"){
      this.mesSelect1 = 7;
    }
    if(value == "8"){
      this.mesSelect1 = 8;
    }
    if(value == "9"){
      this.mesSelect1 = 9;
    }
    if(value == "10"){
      this.mesSelect1 = 10;
    }
    if(value == "11"){
      this.mesSelect1 = 11;
    }
    if(value == "12"){
      this.mesSelect1 = 12;
    }
  }

  mes2(value): void{
    this.ventas = null;
    this.venta1 = null;
    this.venta2 = null;
    this.venta3 = null;
    this.venta4 = null;
    this.venta5 = null;
    this.venta6 = null;
    this.venta7 = null;
    this.venta8 = null;
    this.venta9 = null;
    this.venta10 = null;
    this.venta11 = null;
    this.venta12 = null;
    if(value == "1"){
      this.mesSelect2 = 1;
    }
    if(value == "2"){
      this.mesSelect2 = 2;
    }
    if(value == "3"){
      this.mesSelect2 = 3;
    }
    if(value == "4"){
      this.mesSelect2 = 4;
    }
    if(value == "5"){
      this.mesSelect2 = 5;
    }
    if(value == "6"){
      this.mesSelect2 = 6;
    }
    if(value == "7"){
      this.mesSelect2 = 7;
    }
    if(value == "8"){
      this.mesSelect2 = 8;
    }
    if(value == "9"){
      this.mesSelect2 = 9;
    }
    if(value == "10"){
      this.mesSelect2 = 10;
    }
    if(value == "11"){
      this.mesSelect2 = 11;
    }
    if(value == "12"){
      this.mesSelect2 = 12;
    }
  }

  menssage(mes1: number, mes2: number): void{
    this.ventasService.mensaje(mes1, mes2).subscribe(
      data => {
        this.mensaje = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  menssage2(mes1: number, mes2: number): void{
    this.ventasService.mensaje2(mes1, mes2).subscribe(
      data => {
        this.mensaje2 = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  menssage3(mes1: number, mes2: number): void{
    this.ventasService.mensaje3(mes1, mes2).subscribe(
      data => {
        this.mensaje = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  menssage4(mes1: number, mes2: number): void{
    this.ventasService.mensaje4(mes1, mes2).subscribe(
      data => {
        this.mensaje2 = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  buscar(){
    this.i = 0;

    if(parseInt(this.mesSelect1.toString())>parseInt(this.mesSelect2.toString())){
      this.mesStart = this.mesSelect2;
      this.mesEnd = this.mesSelect1;
    }

    if(parseInt(this.mesSelect1.toString())<parseInt(this.mesSelect2.toString())){
      this.mesStart = this.mesSelect1;
      this.mesEnd = this.mesSelect2;
    }

    if(this.result == 1){
      this.menssage(this.mesStart, this.mesEnd);
      this.menssage2(this.mesStart, this.mesEnd);
    }
    else{
      this.menssage3(this.mesStart, this.mesEnd);
      this.menssage4(this.mesStart, this.mesEnd);
    }

    this.cargarMes(this.mesStart);
    this.i = parseInt(this.mesStart.toString())+1;
    while (this.i < this.mesEnd) {
      this.cargarMes(this.i);
      this.i = parseInt(this.i.toString())+1;
    }

    this.cargarMes(this.mesEnd);
  }

  resultado1(){
    this.result = 1;
    if(this.mesSelect1 == 0){
      this.menssage(1, 12);
      this.menssage2(1, 12);
    }
    else{
      this.menssage(this.mesStart, this.mesEnd);
      this.menssage2(this.mesStart, this.mesEnd);
    }
  }

  resultado2(){
    this.result = 2;
    if(this.mesSelect1 == 0){
      this.menssage3(1, 12);
      this.menssage4(1, 12);
    }
    else{
      this.menssage3(this.mesStart, this.mesEnd);
      this.menssage4(this.mesStart, this.mesEnd);
    }
  }
}
