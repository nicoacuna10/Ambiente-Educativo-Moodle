import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Apoderado } from 'src/app/interfaces/apoderado';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='/api'

  constructor(private http: HttpClient, private router: Router) { }

  // Login
  login(rut: string, password: string){
    return this.http.get(this.url+'/login/'+rut+'/'+password);
  }

  // Crear cuenta alumno
  createAlumno(formValue: any){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(formValue)
    return this.http.post(this.url+'/crear-cuenta-alumno', body, {'headers':headers});
  }

  // Crear cuenta docente
   createDocente(user: Usuario){
    return this.http.post(this.url+'/crear-cuenta-docente', user);
  }

  // Crear cuenta administrador
  createAdministrador(user: Usuario){
    return this.http.post(this.url+'/crear-cuenta-administrador', user);
  }

  // Crear cuenta apoderado
  createApoderado(formValue: any){
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(formValue)
    return this.http.post(this.url+'/crear-cuenta-apoderado', body, {'headers':headers});
  }

  // Editar usuario
  editUsuario(user: Usuario){
    return this.http.put(this.url+'/editar-perfil', user);
  }

  // Obtener usuario
  getUsuario(idUsuario: String){
    return this.http.get(this.url+'/usuario/'+idUsuario);
  }

  //Obtener rol del usuario
  obtenerRol(){
    if(this.estaLogeado()==true){
      let data = '[' +localStorage.getItem('usuario')+']';
      var json = JSON.parse(data)
      return(json[0].idTipo);
    }else return 0 
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  estaLogeado(){
    if(localStorage.getItem('usuario')!=null){
      return true;
    }else return false;
  }

  //Obtener usuarios
  getUsuarios(){
    return this.http.get(this.url+'/usuarios');
  }

}
