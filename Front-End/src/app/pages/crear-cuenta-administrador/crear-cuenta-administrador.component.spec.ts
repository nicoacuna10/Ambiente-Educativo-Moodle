import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaAdministradorComponent } from './crear-cuenta-administrador.component';

describe('CrearCuentaAdministradorComponent', () => {
  let component: CrearCuentaAdministradorComponent;
  let fixture: ComponentFixture<CrearCuentaAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuentaAdministradorComponent]
    });
    fixture = TestBed.createComponent(CrearCuentaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
