import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-administrador',
  templateUrl: './perfil-administrador.component.html',
  styleUrls: ['./perfil-administrador.component.scss']
})
export class PerfilAdministradorComponent {

  user: any = JSON.parse(localStorage.getItem("usuario") || "[]");

  constructor(){}

}
