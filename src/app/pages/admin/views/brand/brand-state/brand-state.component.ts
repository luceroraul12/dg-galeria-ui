import { Component, OnInit } from '@angular/core';
import { TableType } from 'src/app/constants/table-type';

@Component({
  selector: 'app-brand-state',
  templateUrl: './brand-state.component.html',
  styleUrls: ['./brand-state.component.css'],
})
export class BrandStateComponent implements OnInit {
  public tableTypeSelected: TableType = TableType.STOCK_STATE;

  constructor() {}

  ngOnInit(): void {}
}
