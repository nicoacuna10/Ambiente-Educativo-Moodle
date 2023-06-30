import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


export const AuthGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);
  if(usuarioService.estaLogeado()){
    return true;
  }
  else{
    router.navigate(['login']);
    return false;
  }
};
