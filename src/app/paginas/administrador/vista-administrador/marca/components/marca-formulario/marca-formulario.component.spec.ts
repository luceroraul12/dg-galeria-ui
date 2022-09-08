import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaFormularioComponent } from './marca-formulario.component';

describe('MarcaFormularioComponent', () => {
  let component: MarcaFormularioComponent;
  let fixture: ComponentFixture<MarcaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
