import { Component, OnInit } from '@angular/core';
import { BrandCategory, CategoryName } from 'src/app/pages/admin/views/brand/interface/brand.interface';
import { BrandService } from 'src/app/pages/admin/views/brand/service/brand.service';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.css']
})
export class GalleryCategoryComponent implements OnInit {

  public brandCategories!: BrandCategory[];

  constructor(
    private brandService: BrandService

  ) { }

  ngOnInit(): void {
    this.brandService.categories().subscribe(
      ({stockDataResult}) => this.brandCategories = stockDataResult
    )
  }

}
