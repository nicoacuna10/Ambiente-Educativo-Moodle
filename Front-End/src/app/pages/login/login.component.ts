import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { RutService } from 'rut-chileno';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { CursoService } from 'src/app/services/curso/curso.service';
import { Usuario } from '../../interfaces/usuario';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: any;

  showMensaje: boolean = false;

  formInicioSesion!:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private usuarioService:UsuarioService, private cursoService: CursoService, private rutService:RutService, private router: Router) {}


  ngOnInit(){
    let formulario = {
      rut: ['', Validators.compose([
        Validators.required,
        this.rutService.validaRutForm
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
      ])]
    }

    this.formInicioSesion = this.formBuilder.group(formulario)
  }

  iniciarSesion(){

    const rut = this.formInicioSesion.value.rut;
    
    const password = this.formInicioSesion.value.password;

    this.usuarioService.getUsuario(rut, password).subscribe( res =>{
      let largo = Object.keys(res).length;
      if(largo == 1){
        this.user = res.valueOf();
        localStorage.setItem('usuario', JSON.stringify(this.user[0]))
        this.router.navigate(['/home'])
      }else{
        this.showMensaje = true;
      }
      }, error => console.log(error)
    );
      
      
  }


  inputEvent(event : Event) {
    let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
    if (rut)
      this.formInicioSesion.controls['rut'].patchValue(rut, {emitEvent :false});
  }

}
