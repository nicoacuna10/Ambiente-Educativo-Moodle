import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  url='/api';

  constructor(private http: HttpClient) { }

  // Obtener Docente
  getDocente(idDocente: string){
    return this.http.get(this.url+'/docente/'+idDocente);
  }
}
