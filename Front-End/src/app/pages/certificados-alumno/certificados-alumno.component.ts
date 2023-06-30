import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-certificados-alumno',
  templateUrl: './certificados-alumno.component.html',
  styleUrls: ['./certificados-alumno.component.scss']
})
export class CertificadosAlumnoComponent {

  public show1: boolean = false;
  public show2: boolean = false;

  public showInfo: boolean = true;
  public showMessage: boolean = false;

  formCertificado!:FormGroup

  constructor(private formBuilder: FormBuilder){
    this.formCertificado = new FormGroup({
      tipo: new FormControl(["", Validators.required])
    });

  }


  mostrarDescripcion1(){
    this.show1 = true;
    this.show2 = false;
  }

  mostrarDescripcion2(){
    this.show1 = false;
    this.show2 = true;
  }

  solicitarCertificado(){

    this.showInfo = false;
    this.showMessage = true;

  }
  
}
