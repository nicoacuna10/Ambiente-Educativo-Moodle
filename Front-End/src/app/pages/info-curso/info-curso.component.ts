import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from '../../services/docente/docente.service';
import { HorarioService } from '../../services/horario/horario.service';
import { Curso } from 'src/app/interfaces/curso';
import { Docente } from 'src/app/interfaces/docente';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-info-curso',
  templateUrl: './info-curso.component.html',
  styleUrls: ['./info-curso.component.scss']
})
export class InfoCursoComponent {

  curso!: Curso;
  docente!: Docente;
  horarios!:any;


  constructor(private route: ActivatedRoute, private docenteService: DocenteService, private horarioService: HorarioService){}

  ngOnInit(): void{
    const index:number = Number(this.route.snapshot.paramMap.get('i'));

    this.curso = JSON.parse(localStorage.getItem('cursos')!)[index];

    this.docente={
      idDocente: this.curso.idDocente,
      nombre: '',
      email: ''
    };

    this.docenteService.getDocente(this.curso.idDocente).subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo == 1){
        this.docente = Object.values(res)[0];
        console.log(this.docente);
      }
    }, error => console.log(error)
    )

    this.horarioService.getHorario(this.curso.codCurso).subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo > 0){
        this.horarios = res.valueOf();
      }
    })
    
  }

}
