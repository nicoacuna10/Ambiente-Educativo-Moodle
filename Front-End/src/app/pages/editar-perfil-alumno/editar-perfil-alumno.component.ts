import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutService } from 'rut-chileno';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-editar-perfil-alumno',
  templateUrl: './editar-perfil-alumno.component.html',
  styleUrls: ['./editar-perfil-alumno.component.scss']
})
export class EditarPerfilAlumnoComponent {

  user: any = JSON.parse(localStorage.getItem('usuario')!);

  usuario!: Usuario;

  formEditarPerfil!:FormGroup;

  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private rutService:RutService, private router: Router) {}

  ngOnInit(){
    let formulario = {
      nombre: [''],
      password: ['', Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)],
      email: ['', Validators.email],
      direccion: [''],
    }

    this.formEditarPerfil = this.formBuilder.group(formulario);
  }

  editarPerfil(){
    if(this.formEditarPerfil.value.nombre==''){
      this.formEditarPerfil.value.nombre=this.user.nombre;
    }
    if(this.formEditarPerfil.value.password==''){
      this.formEditarPerfil.value.password=this.user.password;
    }
    if(this.formEditarPerfil.value.email==''){
      this.formEditarPerfil.value.email=this.user.email;
    }
    if(this.formEditarPerfil.value.direccion==''){
      this.formEditarPerfil.value.direccion=this.user.direccion;
    }

    this.usuario = {
      idUsuario: this.user.idUsuario,
      nombre: this.formEditarPerfil.value.nombre,
      rut: this.user.rut,
      password: this.formEditarPerfil.value.password,
      email: this.formEditarPerfil.value.email,
      direccion: this.formEditarPerfil.value.direccion,
      idTipo: 1
    }

    this.usuarioService.editUsuario(this.usuario).subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo==1){
        console.log(res.valueOf());
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
      }
    })
    this.router.navigate(['perfil-alumno']);
  }

  volver(){
    this.router.navigate(['perfil-alumno']);
  }

}
