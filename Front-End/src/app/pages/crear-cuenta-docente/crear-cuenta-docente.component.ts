import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RutService } from 'rut-chileno';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-crear-cuenta-docente',
  templateUrl: './crear-cuenta-docente.component.html',
  styleUrls: ['./crear-cuenta-docente.component.scss']
})
export class CrearCuentaDocenteComponent {
  user!:Usuario;

  formCrearCuenta!:FormGroup;

  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private rutService:RutService, private router: Router) {}

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
    }

    this.formCrearCuenta = this.formBuilder.group(formulario);
  }

  crearCuenta(){

    this.user={
      idUsuario: '',
      nombre: this.formCrearCuenta.value.nombre,
      rut: this.formCrearCuenta.value.rut,
      password: this.formCrearCuenta.value.password,
      email: this.formCrearCuenta.value.email,
      direccion: this.formCrearCuenta.value.direccion,
      idTipo: 2
    }

    this.usuarioService.createDocente(this.user).subscribe( res=>{
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
