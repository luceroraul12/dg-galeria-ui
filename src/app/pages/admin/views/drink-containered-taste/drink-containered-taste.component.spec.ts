import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkContaineredTasteComponent } from './drink-containered-taste.component';

describe('AsignacionSaborFormatoComponent', () => {
  let component: DrinkContaineredTasteComponent;
  let fixture: ComponentFixture<DrinkContaineredTasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkContaineredTasteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DrinkContaineredTasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
