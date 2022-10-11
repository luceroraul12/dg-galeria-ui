import { Component, OnInit } from '@angular/core';
import { BrandCategory, CategoryName } from 'src/app/pages/admin/views/brand/interface/brand.interface';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.css']
})
export class GalleryCategoryComponent implements OnInit {

  public brandCategories: BrandCategory[] = [
    {
      categoryName: CategoryName.Cerveza,
      id: 1
    },
    {
      categoryName: CategoryName.Espumante,
      id: 2
    },
    {
      categoryName: CategoryName.Gaseosa,
      id: 3
    },
    {
      categoryName: CategoryName.Vino,
      id: 4
    },
    {
      categoryName: CategoryName.Otros,
      id: 5
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
