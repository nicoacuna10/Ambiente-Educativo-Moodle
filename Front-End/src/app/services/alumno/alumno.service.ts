import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  url='/api';

  constructor(private http: HttpClient) { }

  // Obtener datos específicos de Alumno
  getAlumno(idAlumno: string){
    return this.http.get(this.url+'/alumno/'+idAlumno);
  }
}
