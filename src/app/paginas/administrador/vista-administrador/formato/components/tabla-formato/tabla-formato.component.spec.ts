import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFormatoComponent } from './tabla-formato.component';

describe('TablaFormatoComponent', () => {
  let component: TablaFormatoComponent;
  let fixture: ComponentFixture<TablaFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFormatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
