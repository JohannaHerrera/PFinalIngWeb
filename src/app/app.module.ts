import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { NuevoProductoUserComponent } from './producto/nuevo-producto-user.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { ListaTarifaComponent } from './tarifa/lista-tarifa.component';
import { DetalleTarifaComponent } from './tarifa/detalle-tarifa.component';
import { NuevoTarifaComponent } from './tarifa/nuevo-tarifa.component';
import { EditarTarifaComponent } from './tarifa/editar-tarifa.component';
import { ListaCompraComponent } from './compra/lista-compra.component';
import { DetalleCompraComponent } from './compra/detalle-compra.component';
import { NuevoCompraComponent } from './compra/nuevo-compra.component';
import { EditarCompraComponent } from './compra/editar-compra.component';
import { ListaVentasComponent } from './ventas/lista-ventas.component';
import { MasVentasComponent } from './ventas/mas-ventas.component';
import { MenosVentasComponent } from './ventas/menos-ventas.component';
import { CompararVentasComponent } from './ventas/comparar-ventas.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    NuevoProductoUserComponent,
    EditarProductoComponent,
    ListaTarifaComponent,
    DetalleTarifaComponent,
    NuevoTarifaComponent,
    EditarTarifaComponent,
    ListaCompraComponent,
    DetalleCompraComponent,
    NuevoCompraComponent,
    EditarCompraComponent,
    ListaVentasComponent,
    MasVentasComponent,
    MenosVentasComponent,
    CompararVentasComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
