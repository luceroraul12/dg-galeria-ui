import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableType } from 'src/app/constants/table-type';
import { StockData } from 'src/app/interfaces/stock-data.interface';

@Component({
  selector: 'app-table-buttons',
  templateUrl: './table-buttons.component.html',
  styleUrls: ['./table-buttons.component.css'],
})
export class TableButtonsComponent implements OnInit {
  @Input() rowDataSelected!: StockData;
  @Input() tableType: TableType = TableType.ASIGNATION;

  @Output() delete: EventEmitter<true> = new EventEmitter();
  @Output() update: EventEmitter<true> = new EventEmitter();
  @Output() changeStockState: EventEmitter<true> = new EventEmitter();

  constructor() {}

  isStockState() {
    return this.tableType == TableType.STOCK_STATE;
  }

  ngOnInit(): void {}

  onDelete(): void {
    console.log('delete botonera de tabla');

    this.delete.emit(true);
  }

  onUpdate(): void {
    console.log('update botonera de tabla');

    this.update.emit(true);
  }

  onChangeStockState(): void {
    console.log('changeStockState botonera de tabla');

    this.changeStockState.emit(true);
  }
}
