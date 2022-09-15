import { Component, OnInit } from '@angular/core';
import { BrandedTaste } from 'src/app/interfaces/branded-taste.interface';
import { BrandedTasteService } from 'src/app/services/crud/branded-taste.service';

@Component({
  selector: 'app-asignacion-marca-sabor',
  templateUrl: './asignacion-marca-sabor.component.html',
  styleUrls: ['./asignacion-marca-sabor.component.css'],
})
export class AsignacionMarcaSaborComponent implements OnInit {
  public brandedTasteData: BrandedTaste[] = [];

  constructor(private brandedTasteService: BrandedTasteService) {}

  ngOnInit(): void {
    this.brandedTasteService
      .read()
      .subscribe(
        (response) => (this.brandedTasteData = response.stockDataResult)
      );
  }
}
