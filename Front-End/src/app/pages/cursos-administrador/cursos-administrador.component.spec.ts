import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAdministradorComponent } from './cursos-administrador.component';

describe('CursosAdministradorComponent', () => {
  let component: CursosAdministradorComponent;
  let fixture: ComponentFixture<CursosAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosAdministradorComponent]
    });
    fixture = TestBed.createComponent(CursosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
