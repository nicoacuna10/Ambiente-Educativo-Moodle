import { Component } from '@angular/core';
import { CursoService } from 'src/app/services/curso/curso.service';

@Component({
  selector: 'app-cursos-administrador',
  templateUrl: './cursos-administrador.component.html',
  styleUrls: ['./cursos-administrador.component.scss']
})
export class CursosAdministradorComponent {

  cursos!:any;

  constructor(private cursoService: CursoService){}

  ngOnInit(){

    this.cursoService.getTodosCursos().subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo>0){
        this.cursos = res.valueOf();
        console.log(this.cursos)
        localStorage.setItem('usuarios', JSON.stringify(this.cursos));
      }
    }, error => console.log(error)
    )
  }

}
