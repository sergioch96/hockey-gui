import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipoDTO } from '../models/modelsCommon';
import { Response } from '../models/response';
import { ApiauthService } from './apiauth.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url: string = 'https://localhost:44323/api/Equipo';

  constructor( private _http: HttpClient, private _apiAuthService: ApiauthService ) { }

  getEquipo(idEquipo: number): Observable<Response> {
    return this._http.get<Response>(`${this.url}/${idEquipo}`, this._apiAuthService.getHeaders());
  }
  
  obtenerEquipos(): Observable<Response> {
    return this._http.get<Response>(this.url, this._apiAuthService.getHeaders());
  }

  agregarEquipo(equipo: EquipoDTO): Observable<Response> {
    return this._http.post<Response>(this.url, equipo, this._apiAuthService.getHeaders());
  }
}
