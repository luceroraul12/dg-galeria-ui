import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/pages/admin/views/brand/interface/brand.interface';
import { BrandService } from 'src/app/pages/admin/views/brand/service/brand.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  public informacionDisponible: any[] = [];

  public marcasCreadas: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService.read().subscribe((response) => {
      response.stockDataResult.sort((a, b) => {
        return a.id! - b.id!;
      });
      this.marcasCreadas = response.stockDataResult;
    });
  }
}
