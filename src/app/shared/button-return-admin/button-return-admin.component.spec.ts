import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReturnAdminComponent } from './button-return-admin.component';

describe('ButtonReturnAdminComponent', () => {
  let component: ButtonReturnAdminComponent;
  let fixture: ComponentFixture<ButtonReturnAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonReturnAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonReturnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
