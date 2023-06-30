import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router, private usuarioService: UsuarioService){}

  ngOnInit(): void{

  }

  estaLogueado(){
    if(this.usuarioService.estaLogeado()==true){
      return true;
    }else return false;
  }

  esAlumno(){
    if(this.usuarioService.obtenerRol()==1){
      return true;
    }else return false;
    
  }

  esAdmin(){
    if(this.usuarioService.obtenerRol()==3){
      return true;
    }else return false;
  }

  cerrarSesion(){
    this.usuarioService.cerrarSesion();
  }
}
