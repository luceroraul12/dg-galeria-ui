import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraRetornoComponent } from './botonera-retorno.component';

describe('BotoneraRetornoComponent', () => {
  let component: BotoneraRetornoComponent;
  let fixture: ComponentFixture<BotoneraRetornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneraRetornoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneraRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
