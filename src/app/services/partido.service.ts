import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartidoDTO } from '../models/modelsCommon';
import { Response } from '../models/response';
import { ApiauthService } from './apiauth.service';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  url: string = 'https://localhost:44323/api/Partido';

  constructor( private _http: HttpClient, private _apiAuthService: ApiauthService ) { }

  obtenerPartidos(): Observable<Response> {
    return this._http.get<Response>(this.url, this._apiAuthService.getHeaders());
  }

  programarPartido(partido: PartidoDTO): Observable<Response> {
    return this._http.put<Response>(`${this.url}/programar`, partido, this._apiAuthService.getHeaders());
  }

  cargarPartido(partido: PartidoDTO): Observable<Response> {
    return this._http.put<Response>(`${this.url}/cargar`, partido, this._apiAuthService.getHeaders());
  }
}
