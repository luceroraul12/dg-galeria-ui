import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborEstadoComponent } from './sabor-estado.component';

describe('SaborEstadoComponent', () => {
  let component: SaborEstadoComponent;
  let fixture: ComponentFixture<SaborEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaborEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaborEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
