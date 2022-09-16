import { Component, Input, OnInit } from '@angular/core';
import { Taste } from 'src/app/interfaces/taste.interface';
import { TasteService } from 'src/app/services/crud/taste.service';

@Component({
  selector: 'app-tabla-sabor',
  templateUrl: './tabla-sabor.component.html',
  styleUrls: ['./tabla-sabor.component.css'],
})
export class TablaSaborComponent implements OnInit {
  @Input() tipoDeTabla: string = 'determinado';
  public saboresCreados: Taste[] = [];
  constructor(private tasteService: TasteService) {}

  ngOnInit(): void {
    this.tasteService
      .read()
      .subscribe(
        (response) => (this.saboresCreados = response.stockDataResult)
      );
  }
}
