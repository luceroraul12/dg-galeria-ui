import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartViewMobileComponent } from './shopping-cart-view-mobile.component';

describe('ShoppingCartViewMobileComponent', () => {
  let component: ShoppingCartViewMobileComponent;
  let fixture: ComponentFixture<ShoppingCartViewMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartViewMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartViewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
