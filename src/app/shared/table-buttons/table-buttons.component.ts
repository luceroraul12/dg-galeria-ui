import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StockData } from 'src/app/interfaces/stock-data.interface';

@Component({
  selector: 'app-table-buttons',
  templateUrl: './table-buttons.component.html',
  styleUrls: ['./table-buttons.component.css'],
})
export class TableButtonsComponent implements OnInit {
  @Input() stockState: boolean = false;
  @Input() rowDataSelected!: StockData;

  @Output() delete: EventEmitter<true> = new EventEmitter();
  @Output() update: EventEmitter<[StockData]> = new EventEmitter();
  @Output() changeStockState: EventEmitter<true> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(): void {
    console.log('delete botonera de tabla');

    this.delete.emit(true);
  }

  onUpdate(): void {
    console.log('update botonera de tabla');

    this.update.emit([this.rowDataSelected]);
  }

  onChangeStockState(): void {
    console.log('changeStockState botonera de tabla');

    this.changeStockState.emit(true);
  }
}
