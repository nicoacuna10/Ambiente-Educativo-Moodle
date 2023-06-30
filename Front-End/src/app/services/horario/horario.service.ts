import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  url='/api'

  constructor(private http: HttpClient) { }

  // Obtener horario de un curso
  getHorario(codCurso: string){
    return this.http.get(this.url+'/horario/'+codCurso);
  }
}
