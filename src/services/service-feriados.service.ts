import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feriados } from '../app/pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceFeriadosService {

  constructor(private Http:HttpClient) { }

  getFeriados(){
    return this.Http.get<Feriados>('/fl/feriados/2022?offset=1')
    //https://apis.digital.gob.cl/fl/feriados/2022?offset=1
  }


}
