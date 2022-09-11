import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaboresResumido } from 'src/app/interfaces/cliente.interface';
import { Marca } from 'src/app/interfaces/marca.interface';
import { ClienteService } from 'src/app/services/cliente.service';

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
