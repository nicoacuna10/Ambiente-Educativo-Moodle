import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';


const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'ficha-alumno', component: FichaAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'perfil-alumno', component: PerfilAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'notas-alumno', component: NotasAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'calendario', component: CalendarioComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'certificados-alumno', component: CertificadosAlumnoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'info-curso', component: InfoCursoComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 1}},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},

  { path: 'perfil-administrador', component: PerfilAdministradorComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 3}},
  { path: 'usuarios-administrador', component: UsuariosAdministradorComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 3}},
  { path: 'cursos-administrador', component: CursosAdministradorComponent, canActivate:[AuthGuard, RoleGuard], data:{role: 3}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
