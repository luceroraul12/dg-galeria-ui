import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasteComponent } from './sabor.component';

describe('SaborComponent', () => {
  let component: TasteComponent;
  let fixture: ComponentFixture<TasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
