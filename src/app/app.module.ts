import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './sitio-web/home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './sistema-web/menu/menu.component';
import { CrearEquipoComponent } from './sistema-web/crear-equipo/crear-equipo.component';
import { GestionPartidosComponent } from './sistema-web/gestion-partidos/gestion-partidos.component';
import { CrearCampeonatoComponent } from './sistema-web/crear-campeonato/crear-campeonato.component';
import { GestionEquiposComponent } from './sistema-web/gestion-equipos/gestion-equipos.component';
import { GestionArbitrosComponent } from './sistema-web/gestion-arbitros/gestion-arbitros.component';
import { GestionJuecesComponent } from './sistema-web/gestion-jueces/gestion-jueces.component';
import { CalendarioComponent } from './sitio-web/calendario/calendario.component';
import { ResultadosComponent } from './sitio-web/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    CrearEquipoComponent,
    GestionPartidosComponent,
    CrearCampeonatoComponent,
    GestionEquiposComponent,
    GestionArbitrosComponent,
    GestionJuecesComponent,
    CalendarioComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
