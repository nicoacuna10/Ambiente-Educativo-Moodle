import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaAlumnoComponent } from './crear-cuenta-alumno.component';

describe('CrearCuentaAlumnoComponent', () => {
  let component: CrearCuentaAlumnoComponent;
  let fixture: ComponentFixture<CrearCuentaAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuentaAlumnoComponent]
    });
    fixture = TestBed.createComponent(CrearCuentaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
