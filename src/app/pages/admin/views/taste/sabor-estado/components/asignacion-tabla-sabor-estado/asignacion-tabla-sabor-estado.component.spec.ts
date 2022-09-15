import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionTablaSaborEstadoComponent } from './asignacion-tabla-sabor-estado.component';

describe('AsignacionTablaSaborEstadoComponent', () => {
  let component: AsignacionTablaSaborEstadoComponent;
  let fixture: ComponentFixture<AsignacionTablaSaborEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionTablaSaborEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionTablaSaborEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
