import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAdministradorComponent } from './usuarios-administrador.component';

describe('UsuariosAdministradorComponent', () => {
  let component: UsuariosAdministradorComponent;
  let fixture: ComponentFixture<UsuariosAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosAdministradorComponent]
    });
    fixture = TestBed.createComponent(UsuariosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
