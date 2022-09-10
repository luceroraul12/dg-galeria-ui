import { Marca } from './marca.interface';
import { Sabor } from './sabor.interface';

export interface SaborAsociadoResponse {
  saboresAsociadosTrabajados: SaborAsociado[];
  saborTrabajado: SaborAsociado;
  mensaje: string;
}

export interface SaborAsociado {
  id: number;
  estadoStock: boolean;
  marca: Marca;
  sabor: Sabor;
}
