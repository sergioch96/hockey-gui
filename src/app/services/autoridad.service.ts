import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { ApiauthService } from './apiauth.service';

@Injectable({
  providedIn: 'root'
})
export class AutoridadService {
  url: string = 'https://localhost:44323/api/Autoridad';

  constructor( private _http: HttpClient, private _apiAuthService: ApiauthService ) { }

  obtenerAutoridades(): Observable<Response> {
    return this._http.get<Response>(this.url, this._apiAuthService.getHeaders());
  }
}
