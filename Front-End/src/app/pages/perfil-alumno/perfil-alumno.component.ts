import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { AlumnoService } from '../../services/alumno/alumno.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.scss']
})
export class PerfilAlumnoComponent {

  idUsuario: any = JSON.parse(localStorage.getItem('usuario')!).idUsuario;
  //user: any = JSON.parse(localStorage.getItem("usuario") || "[]");
  user!: Usuario;

  alumno!: Alumno;
  constructor(private router: Router, private usuarioService: UsuarioService, private alumnoService: AlumnoService){}

  ngOnInit(){

    this.user ={
      idUsuario: this.idUsuario,
      nombre: '',
      rut: '',
      password: '',
      email: '',
      direccion: '',
      idTipo: 1
    }

    this.alumno ={
      idAlumno: this.idUsuario,
      nivel: '',
      seccion: '',
      idApoderado: ''
    }

    this.usuarioService.getUsuario(this.user.idUsuario).subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo == 1){
        this.user = Object.values(res)[0];
      }
    }, error => console.log(error)
    )

    this.alumnoService.getAlumno(this.user.idUsuario).subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo == 1){
        this.alumno = Object.values(res)[0];
      }
    }, error => console.log(error)
    )
  }

  editarPerfil(){
    this.router.navigate(['editar-perfil-alumno']);
  }

  
}
