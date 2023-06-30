import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutService } from 'rut-chileno';
import { Usuario } from 'src/app/interfaces/usuario';
import { Alumno } from 'src/app/interfaces/alumno';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-crear-cuenta-alumno',
  templateUrl: './crear-cuenta-alumno.component.html',
  styleUrls: ['./crear-cuenta-alumno.component.scss']
})
export class CrearCuentaAlumnoComponent {
  user!:Usuario;

  users: any = JSON.parse(localStorage.getItem('usuarios')!);

  apoderados!: any;

  formCrearCuenta!:FormGroup;

  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private rutService:RutService, private router: Router) {
    this.apoderados=[];

    for (let index = 0; index < this.users.length; index++) {
      if(this.users[index].idTipo==4){
        this.apoderados.push(this.users[index]);
      }
      
    }
  }

  ngOnInit(){
    let formulario = {
      nombre: ['', Validators.required],
      rut: ['', Validators.compose([
        Validators.required,
        this.rutService.validaRutForm
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      direccion: ['', Validators.required],
      nivel: ['', Validators.required],
      seccion: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-Z]+$/),
        Validators.minLength(1),
        Validators.maxLength(1)
      ])],
      idApoderado: ['', Validators.required]
    }

    this.formCrearCuenta = this.formBuilder.group(formulario);
  }

  crearCuenta(){

    this.usuarioService.createAlumno(this.formCrearCuenta.value).subscribe( res=>{
      this.volver();

    })
  }

  volver(){
    this.router.navigate(['usuarios-administrador']);
  }



  inputEvent(event : Event) {
    let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
    if (rut)
      this.formCrearCuenta.controls['rut'].patchValue(rut, {emitEvent :false});
  }
}
