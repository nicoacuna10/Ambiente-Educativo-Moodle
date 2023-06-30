import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url='/api'

  constructor(private http: HttpClient) { }

  // Obtener cursos de un alumno
  getCursos(id: string){
    return this.http.get(this.url+'/cursos/'+id);
  }

  // Obtener todos los cursos
  getTodosCursos(){
    return this.http.get(this.url+'/cursos');
  }
}
