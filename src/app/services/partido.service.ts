import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
