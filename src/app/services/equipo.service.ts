import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipoDTO } from '../models/modelsCommon';
import { Response } from '../models/response';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url: string = 'https://localhost:44323/api/Equipo';

  constructor( private _http: HttpClient ) { }

  agregarEquipo(equipo: EquipoDTO): Observable<Response> {
    return this._http.post<Response>(this.url, equipo, httpOption);
  }
}
