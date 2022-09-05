import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaFormularioComponent } from './bebida-formulario.component';

describe('BebidaFormularioComponent', () => {
  let component: BebidaFormularioComponent;
  let fixture: ComponentFixture<BebidaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
