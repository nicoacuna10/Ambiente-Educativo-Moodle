import { startOfDay } from 'date-fns';
import {  Component} from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { AlumnoClaseService } from '../../services/alumno_clase/alumno-clase.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})

export class CalendarioComponent {

  eventos!:any[];

  locale: string = "es"

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  setView(view: CalendarView) {
    this.view = view;
  }

  events!: CalendarEvent[];

  constructor(private alumnoClaseService: AlumnoClaseService){
    const idAlumno = JSON.parse(localStorage.getItem('usuario')!).idUsuario;
    this.alumnoClaseService.getEventos(idAlumno).subscribe( res=>{
      let largo = Object.keys(res).length;
      if(largo > 0){
        this.eventos = Object.values(res);

        for(let i = 0; i<this.eventos.length; i++){
          const evento: CalendarEvent = {
            start: new Date(this.eventos[i].fecha),
            title: this.eventos[i].tipo_evaluacion
          }
          this.events.push(evento);
        }
      }
    }, error => console.log(error)
    )
  }

  
  

  

  /*
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]
  */


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }
  
}
