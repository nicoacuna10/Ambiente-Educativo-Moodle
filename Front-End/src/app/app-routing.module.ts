import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { FichaAlumnoComponent } from './pages/ficha-alumno/ficha-alumno.component';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { EditarPerfilAlumnoComponent } from './pages/editar-perfil-alumno/editar-perfil-alumno.component';
import { NotasAlumnoComponent } from './pages/notas-alumno/notas-alumno.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CertificadosAlumnoComponent } from './pages/certificados-alumno/certificados-alumno.component';
import { InfoCursoComponent } from './pages/info-curso/info-curso.component';

import { HomeComponent } from './pages/home/home.component';

import { PerfilAdministradorComponent } from './pages/perfil-administrador/perfil-administrador.component';
import { UsuariosAdministradorComponent } from './pages/usuarios-administrador/usuarios-administrador.component';
import { CrearCuentaAdministradorComponent } from './pages/crear-cuenta-administrador/crear-cuenta-administrador.component';
import { CrearCuentaDocenteComponent } from './pages/crear-cuenta-docente/crear-cuenta-docente.component';
import { CrearCuentaApoderadoComponent } from './pages/crear-cuenta-apoderado/crear-cuenta-apoderado.component';
import { CrearCuentaAlumnoComponent } from './pages/crear-cuenta-alumno/crear-cuenta-alumno.component';
import { CursosAdministradorComponent } from './pages/cursos-administrador/cursos-administrador.component';


import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'ficha-alumno', component: FichaAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'perfil-alumno', component: PerfilAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'editar-perfil-alumno', component: EditarPerfilAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'notas-alumno', component: NotasAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'calendario', component: CalendarioComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'certificados-alumno', component: CertificadosAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'info-curso', component: InfoCursoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},

  { path: 'perfil-administrador', component: PerfilAdministradorComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 3}},
  { path: 'usuarios-administrador', component: UsuariosAdministradorComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 3}},
  { path: 'cursos-administrador', component: CursosAdministradorComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 3}},
  { path: 'crear-cuenta-administrador', component: CrearCuentaAdministradorComponent, canActivate:[AuthGuard, RoleGuard], data:{role:3}},
  { path: 'crear-cuenta-docente', component: CrearCuentaDocenteComponent, canActivate:[AuthGuard, RoleGuard], data:{role:3}},
  { path: 'crear-cuenta-apoderado', component: CrearCuentaApoderadoComponent, canActivate:[AuthGuard, RoleGuard], data:{role:3}},
  { path: 'crear-cuenta-alumno', component: CrearCuentaAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role:3}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
