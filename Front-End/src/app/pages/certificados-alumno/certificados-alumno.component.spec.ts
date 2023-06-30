import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosAlumnoComponent } from './certificados-alumno.component';

describe('CertificadosAlumnoComponent', () => {
  let component: CertificadosAlumnoComponent;
  let fixture: ComponentFixture<CertificadosAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificadosAlumnoComponent]
    });
    fixture = TestBed.createComponent(CertificadosAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
