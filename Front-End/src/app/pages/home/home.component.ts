import { Component } from '@angular/core';
import { CursoService } from 'src/app/services/curso/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user:any = JSON.parse(localStorage.getItem('usuario')!);
  cursos!:any;

  constructor(private cursoService: CursoService){}

  ngOnInit(){
    if(this.user.idTipo=="1"){
      this.cursoService.getCursos(this.user.idUsuario).subscribe( res=>{
        let largo = Object.keys(res).length;
        if(largo > 0){
          this.cursos = res.valueOf();
          console.log(this.cursos)
          localStorage.setItem('cursos', JSON.stringify(this.cursos))
        }
      }, error => console.log(error)
      )
    }
  }
}
