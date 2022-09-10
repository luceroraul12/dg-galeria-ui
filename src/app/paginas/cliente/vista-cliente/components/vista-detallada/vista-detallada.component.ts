import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marca } from 'src/app/interfaces/marca.interface';
import { MarcaService } from '../../../../../servicios/marca.service';
import { SaborService } from '../../../../../servicios/sabor.service';
import { Sabor } from 'src/app/interfaces/sabor.interface';
import { SaborFormateado } from '../../../../../interfaces/saborformateado.interface';
import { SaborFormateadoService } from '../../../../../servicios/sabor-formateado.service';
import { SaborAsociadoService } from '../../../../../servicios/sabor-asociado.service';
import { SaborAsociado } from 'src/app/interfaces/saborasociado.interface';
import { ClienteService } from '../../../../../servicios/cliente.service';
import { SaboresResumido } from '../../../../../interfaces/cliente.interface';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css'],
})
export class VistaDetalladaComponent implements OnInit {
  @Output() fueClickeadoCambio = new EventEmitter<boolean>();

  private idMarca: string = '';
  public marcaElegida!: Marca;
  public saboresCreados!: SaboresResumido[];

  constructor(
    private activateRoute: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ idMarca }) => {
      console.log(idMarca);
      this.clienteService.resumen(idMarca).subscribe((respuesta) => {
        this.marcaElegida = respuesta.resumen.marcaElegida;
        this.saboresCreados = respuesta.resumen.saboresResumidos;
      });
    });
  }
}
