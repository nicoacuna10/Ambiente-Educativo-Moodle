import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { RutService } from 'rut-chileno';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formInicioSesion!: FormGroup;

  constructor(private formBuilder: FormBuilder, private rutService: RutService, private router: Router) {}

  ngOnInit(): void {
    let formulario = {
      rut: ['', Validators.compose([
        Validators.required,
        this.rutService.validaRutForm
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
      ])]
    }
    this.formInicioSesion = this.formBuilder.group(formulario);

  }

  inputEvent(event : Event) {
    let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
    if (rut)
      this.formInicioSesion.controls['rut'].patchValue(rut, {emitEvent :false});
  }

  iniciarSesion() {
    console.log(this.formInicioSesion.status);
    if (this.formInicioSesion.status === 'VALID') {
      this.router.navigate(['/perfil'])
    }
  }

}
