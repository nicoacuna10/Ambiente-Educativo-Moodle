import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCuentaApoderadoComponent } from './crear-cuenta-apoderado.component';

describe('CrearCuentaApoderadoComponent', () => {
  let component: CrearCuentaApoderadoComponent;
  let fixture: ComponentFixture<CrearCuentaApoderadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCuentaApoderadoComponent]
    });
    fixture = TestBed.createComponent(CrearCuentaApoderadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
