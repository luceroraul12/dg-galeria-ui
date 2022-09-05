import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoFormularioComponent } from './formato-formulario.component';

describe('FormatoFormularioComponent', () => {
  let component: FormatoFormularioComponent;
  let fixture: ComponentFixture<FormatoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
