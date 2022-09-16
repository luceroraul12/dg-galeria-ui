import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaEstadoComponent } from './brand-state.component';

describe('MarcaEstadoComponent', () => {
  let component: MarcaEstadoComponent;
  let fixture: ComponentFixture<MarcaEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarcaEstadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarcaEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
