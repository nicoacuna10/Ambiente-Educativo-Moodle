import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoClaseService {

  url='/api';

  constructor(private http: HttpClient) { }

  //obtener notas de un curso
  getNotas(idAlumno: string, codCurso: string){
    return this.http.get(this.url+'/notas/'+idAlumno+'/'+codCurso);
  }

  //obtener eventos
  getEventos(idAlumno: string){
    return this.http.get(this.url+'/eventos/'+idAlumno);
  }
}
