import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionSaborFormatoComponent } from './drink-containered-taste.component';

describe('AsignacionSaborFormatoComponent', () => {
  let component: AsignacionSaborFormatoComponent;
  let fixture: ComponentFixture<AsignacionSaborFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionSaborFormatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionSaborFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
