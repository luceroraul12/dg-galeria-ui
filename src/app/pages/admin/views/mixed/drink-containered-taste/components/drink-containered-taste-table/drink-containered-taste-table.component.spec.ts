import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkContainerTasteTableComponent } from './drink-containered-taste-table.component';

describe('DrinkContainerTasteTableComponent', () => {
  let component: DrinkContainerTasteTableComponent;
  let fixture: ComponentFixture<DrinkContainerTasteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkContainerTasteTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkContainerTasteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
