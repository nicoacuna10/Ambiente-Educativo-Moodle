import { Component } from '@angular/core';
import { CursoService } from 'src/app/services/curso/curso.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { Curso } from 'src/app/interfaces/curso';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.component.html',
  styleUrls: ['./ficha-alumno.component.scss']
})
export class FichaAlumnoComponent {

  cursos!:any;
  user!:any;
  

  constructor(){  }

  ngOnInit(){
    this.user=JSON.parse(localStorage.getItem('usuario')!);
    this.cursos=JSON.parse(localStorage.getItem('cursos')!);
  }

}
