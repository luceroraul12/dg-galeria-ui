import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-vista-administrador',
  templateUrl: './vista-administrador.component.html',
  styleUrls: ['./vista-administrador.component.css'],
})
export class VistaAdministradorComponent implements OnInit {
  public urlFormato: string = environment.urlImgFormato;
  public urlMarca: string = environment.urlImgMarca;
  public urlSabor: string = environment.urlImgSabor;
  public urlAsingacionMarcaSabor: string =
    environment.urlImgAsignacionMarcaSabor;

  constructor() {}

  ngOnInit(): void {}
}
