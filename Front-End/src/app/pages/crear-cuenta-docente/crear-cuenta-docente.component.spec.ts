import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaDocenteComponent } from './crear-cuenta-docente.component';

describe('CrearCuentaDocenteComponent', () => {
  let component: CrearCuentaDocenteComponent;
  let fixture: ComponentFixture<CrearCuentaDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuentaDocenteComponent]
    });
    fixture = TestBed.createComponent(CrearCuentaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
