import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasAlumnoComponent } from './notas-alumno.component';

describe('NotasAlumnoComponent', () => {
  let component: NotasAlumnoComponent;
  let fixture: ComponentFixture<NotasAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotasAlumnoComponent]
    });
    fixture = TestBed.createComponent(NotasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
