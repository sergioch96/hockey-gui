import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiauthService } from './apiauth.service';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  url: string = 'https://localhost:44323/api/Jugador';

  constructor( private _http: HttpClient, private _apiAuthService: ApiauthService ) { }

  getJugadoresPorEquipo(idEquipo: number): Observable<Response> {
    return this._http.get<Response>(`${this.url}/${idEquipo}`, this._apiAuthService.getHeaders());
  }
}
