import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevoBUser/:id', component: NuevoProductoUserComponent, canActivate: [guard], data: { expectedRol: ['user'] } },
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'listaTarifa', component: ListaTarifaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'detalleTarifa/:id', component: DetalleTarifaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'nuevoTarifa', component: NuevoTarifaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'editarTarifa/:id', component: EditarTarifaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'listaCompra', component: ListaCompraComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detalleCompra/:id', component: DetalleCompraComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'nuevoCompra', component: NuevoCompraComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'editarCompra/:id', component: EditarCompraComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'listaVentas', component: ListaVentasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'masVentas', component: MasVentasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'menosVentas', component: MenosVentasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'compararVentas/:mes1/:mes2', component: CompararVentasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
