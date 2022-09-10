import { Component, Input, OnInit } from '@angular/core';
import { SaborService } from '../../../../../../../servicios/sabor.service';
import { Sabor } from '../../../../../../../interfaces/sabor.interface';

@Component({
  selector: 'app-tabla-sabor',
  templateUrl: './tabla-sabor.component.html',
  styleUrls: ['./tabla-sabor.component.css'],
})
export class TablaSaborComponent implements OnInit {
  @Input() tipoDeTabla: string = 'determinado';
  public saboresCreados: Sabor[] = [];
  constructor(private saborService: SaborService) {}

  ngOnInit(): void {
    this.saborService
      .getAllSabores()
      .subscribe(
        (respuesta) => (this.saboresCreados = respuesta.saboresTrabajados)
      );
  }
}
