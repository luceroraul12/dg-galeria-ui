import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorSaborComponent } from './buscador-sabor.component';

describe('BuscadorSaborComponent', () => {
  let component: BuscadorSaborComponent;
  let fixture: ComponentFixture<BuscadorSaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorSaborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorSaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
