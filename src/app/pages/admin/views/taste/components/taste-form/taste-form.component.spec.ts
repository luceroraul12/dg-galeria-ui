import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasteFormComponent } from './taste-form.component';

describe('TasteFormComponent', () => {
  let component: TasteFormComponent;
  let fixture: ComponentFixture<TasteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasteFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
