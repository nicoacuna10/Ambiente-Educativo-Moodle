import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno/alumno.service';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.scss']
})
export class PerfilAlumnoComponent {

  user: any = JSON.parse(localStorage.getItem("usuario") || "[]");

  alumno!: Alumno;



  constructor(private alumnoService: AlumnoService){}

  ngOnInit(){

    this.alumno ={
      idAlumno: this.user.idUsuario,
      nivel: '',
      seccion: '',
      idApoderado: ''
    }

    this.alumnoService.getAlumno(this.user.idUsuario).subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo == 1){
        this.alumno = Object.values(res)[0];
      }
    }, error => console.log(error)
    )
  }

  
}
