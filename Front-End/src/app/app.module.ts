import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RutModule } from 'rut-chileno';
import { SidebarModule, IconModule, BadgeModule } from 'ng-cdbangular';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { FichaAlumnoComponent } from './pages/ficha-alumno/ficha-alumno.component';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { NotasAlumnoComponent } from './pages/notas-alumno/notas-alumno.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CertificadosAlumnoComponent } from './pages/certificados-alumno/certificados-alumno.component';
import { InfoCursoComponent } from './pages/info-curso/info-curso.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilAdministradorComponent } from './pages/perfil-administrador/perfil-administrador.component';
import { UsuariosAdministradorComponent } from './pages/usuarios-administrador/usuarios-administrador.component';
import { CursosAdministradorComponent } from './pages/cursos-administrador/cursos-administrador.component';
import { EditarPerfilAlumnoComponent } from './pages/editar-perfil-alumno/editar-perfil-alumno.component';
import { CrearCuentaAdministradorComponent } from './pages/crear-cuenta-administrador/crear-cuenta-administrador.component';
import { CrearCuentaDocenteComponent } from './pages/crear-cuenta-docente/crear-cuenta-docente.component';
import { CrearCuentaApoderadoComponent } from './pages/crear-cuenta-apoderado/crear-cuenta-apoderado.component';
import { CrearCuentaAlumnoComponent } from './pages/crear-cuenta-alumno/crear-cuenta-alumno.component';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FichaAlumnoComponent,
    PerfilAlumnoComponent,
    NotasAlumnoComponent,
    CalendarioComponent,
    CertificadosAlumnoComponent,
    InfoCursoComponent,
    HomeComponent,
    PerfilAdministradorComponent,
    UsuariosAdministradorComponent,
    CursosAdministradorComponent,
    EditarPerfilAlumnoComponent,
    CrearCuentaAdministradorComponent,
    CrearCuentaDocenteComponent,
    CrearCuentaApoderadoComponent,
    CrearCuentaAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RutModule,
    SidebarModule,
    IconModule,
    BadgeModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
