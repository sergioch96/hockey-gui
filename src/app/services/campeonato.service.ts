import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { ApiauthService } from './apiauth.service';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  url: string = 'https://localhost:44323/api/Campeonato';

  constructor( private _http: HttpClient, private _apiAuthService: ApiauthService ) { }

  obtenerTablaPosiciones(): Observable<Response> {
    return this._http.get<Response>(`${this.url}/tablaPosiciones`, this._apiAuthService.getHeaders());
  }

  obtenerTablaGoleadores(): Observable<Response> {
    return this._http.get<Response>(`${this.url}/tablaGoleadores`, this._apiAuthService.getHeaders());
  }

  obtenerTablaAcumulacionTarjetas(): Observable<Response> {
    return this._http.get<Response>(`${this.url}/tablaTarjetas`, this._apiAuthService.getHeaders());
  }
}
