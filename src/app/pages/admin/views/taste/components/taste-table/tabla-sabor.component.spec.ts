import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSaborComponent } from './tabla-sabor.component';

describe('TablaSaborComponent', () => {
  let component: TablaSaborComponent;
  let fixture: ComponentFixture<TablaSaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaSaborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaSaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
