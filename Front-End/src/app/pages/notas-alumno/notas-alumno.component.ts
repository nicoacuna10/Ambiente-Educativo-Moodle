import { Component } from '@angular/core';
import { AlumnoClaseService } from '../../services/alumno_clase/alumno-clase.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-notas-alumno',
  templateUrl: './notas-alumno.component.html',
  styleUrls: ['./notas-alumno.component.scss']
})
export class NotasAlumnoComponent {

  formNotas!: FormGroup 

  notas: any;

  notasRegistradas: boolean = false;
  buttonClicked: boolean = false;

  cursos = JSON.parse(localStorage.getItem('cursos')!);
  
  constructor(private formBuilder: FormBuilder, private alumnoClaseService: AlumnoClaseService){}

  ngOnInit(){
    let formulario={
      codigo: ['']
    }

    this.formNotas = this.formBuilder.group(formulario);
  }

  obtenerNotas(){
    this.buttonClicked = true;

    const codCurso = this.formNotas.value.codigo;
    console.log(codCurso);
    const idAlumno = JSON.parse(localStorage.getItem('usuario')!).idUsuario;

    this.alumnoClaseService.getNotas(idAlumno, codCurso).subscribe( res =>{
      let largo = Object.keys(res).length;
      if(largo > 0){
        this.notasRegistradas = true;
        this.notas = Object.values(res);

      }else{
        this.notasRegistradas = false;
      }
    }, error => console.log(error)
    )
  }
}
