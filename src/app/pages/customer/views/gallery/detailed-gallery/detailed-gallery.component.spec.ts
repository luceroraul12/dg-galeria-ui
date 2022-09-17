import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailedGallery } from './detailed-galllery.component';

describe('VistaDetalladaComponent', () => {
  let component: DetailedGallery;
  let fixture: ComponentFixture<DetailedGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
