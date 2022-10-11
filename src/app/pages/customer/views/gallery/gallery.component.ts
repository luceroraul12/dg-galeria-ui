import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
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

  public idCategorySelected!: number;

  constructor(
    private brandService: BrandService,
    private activateRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.brandService.read().subscribe((response) => {
      this.marcasCreadas = response.stockDataResult;
    });
    this.activateRoute.params.subscribe(
      ({idBrandCategory}) => this.idCategorySelected = idBrandCategory
    )
  }
}
