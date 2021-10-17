import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';
import { CrearCampeonatoComponent } from './sistema-web/crear-campeonato/crear-campeonato.component';
import { CrearEquipoComponent } from './sistema-web/crear-equipo/crear-equipo.component';
import { GestionEquiposComponent } from './sistema-web/gestion-equipos/gestion-equipos.component';
import { GestionPartidosComponent } from './sistema-web/gestion-partidos/gestion-partidos.component';
import { MenuComponent } from './sistema-web/menu/menu.component';
import { HomeComponent } from './sitio-web/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'gestion-equipos', component: GestionEquiposComponent, canActivate: [AuthGuard] },
  { path: 'crear-equipo', component: CrearEquipoComponent, canActivate: [AuthGuard] },
  { path: 'gestion-partidos', component: GestionPartidosComponent, canActivate: [AuthGuard] },
  { path: 'crear-campeonato', component: CrearCampeonatoComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
