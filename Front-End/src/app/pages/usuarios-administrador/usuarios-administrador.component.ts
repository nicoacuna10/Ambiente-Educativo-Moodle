import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-usuarios-administrador',
  templateUrl: './usuarios-administrador.component.html',
  styleUrls: ['./usuarios-administrador.component.scss']
})
export class UsuariosAdministradorComponent {

  users!:any;

  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(){

    this.usuarioService.getUsuarios().subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo>0){
        this.users = res.valueOf();
        console.log(this.users)
        localStorage.setItem('usuarios', JSON.stringify(this.users));
      }
    }, error => console.log(error)
    )
  }

  crearCuentaAlumno(){
    this.router.navigate(['crear-cuenta-alumno'])
  }

  crearCuentaDocente(){
    this.router.navigate(['crear-cuenta-docente']);
  }

  crearCuentaAdministrador(){
    this.router.navigate(['crear-cuenta-administrador']);
  }

  crearCuentaApoderado(){
    this.router.navigate(['crear-cuenta-apoderado']);
  }

}
