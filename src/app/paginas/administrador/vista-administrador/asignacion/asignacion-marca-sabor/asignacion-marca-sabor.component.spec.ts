import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionMarcaSaborComponent } from './asignacion-marca-sabor.component';

describe('AsignacionMarcaSaborComponent', () => {
  let component: AsignacionMarcaSaborComponent;
  let fixture: ComponentFixture<AsignacionMarcaSaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionMarcaSaborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionMarcaSaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
