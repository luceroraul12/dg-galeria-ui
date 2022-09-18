import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStateComponent } from './brand-state.component';

describe('MarcaEstadoComponent', () => {
  let component: BrandStateComponent;
  let fixture: ComponentFixture<BrandStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
