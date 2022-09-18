import { Component, OnInit } from '@angular/core';
import { TableType } from 'src/app/constants/table-type';

@Component({
  selector: 'app-drink-containered-taste',
  templateUrl: './drink-containered-taste.component.html',
  styleUrls: ['./drink-containered-taste.component.css'],
})
export class DrinkContaineredTasteComponent implements OnInit {
  public tableType: TableType = TableType.STOCK_STATE;

  constructor() {}

  ngOnInit(): void {}
}
