import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionSaborFormatoComponent } from './asignacion-sabor-formato.component';

describe('AsignacionSaborFormatoComponent', () => {
  let component: AsignacionSaborFormatoComponent;
  let fixture: ComponentFixture<AsignacionSaborFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionSaborFormatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionSaborFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
