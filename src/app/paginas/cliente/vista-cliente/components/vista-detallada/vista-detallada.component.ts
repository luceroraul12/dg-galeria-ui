import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/interfaces/marca.interface';
import { MarcaService } from '../../../../../servicios/marca.service';
import { SaborService } from '../../../../../servicios/sabor.service';
import { Sabor } from 'src/app/interfaces/sabor.interface';
import { SaborFormateado } from '../../../../../interfaces/saborformateado.interface';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css'],
})
export class VistaDetalladaComponent implements OnInit {
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();

  private idMarca: string = '';
  public marcaElegida!: Marca;
  public saboresDisponibles!: Sabor[];
  public saboresFormateados!: SaborFormateado[];

  constructor(
    private activateRoute: ActivatedRoute,
    private marcaService: MarcaService,
    private saborService: SaborService
  ) {}

  ngOnInit(): void {}
}
