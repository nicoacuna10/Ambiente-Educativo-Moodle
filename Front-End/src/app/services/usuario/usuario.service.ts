import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='/api'

  constructor(private http: HttpClient, private router: Router) { }

  //Obtener usuario
  getUsuario(rut: string, password: string){
    return this.http.get(this.url+'/login/'+rut+'/'+password);
  }

  //Obtener rol del usuario
  obtenerRol(){
    let data = '[' +localStorage.getItem('usuario')+']';
    var json = JSON.parse(data)
    return(json[0].idTipo);
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
