import { Formato } from './formato.interface';
import { SaborAsociado } from './saborasociado.interface';

export interface SaborFormateadoResponse {
  saborFormateadoTrabajado: SaborFormateado;
  saboresFormateadosTrabajados: SaborFormateado[];
  mensaje: string;
}

export interface SaborFormateado {
  id: number;
  estadoStock: boolean;
  formato: Formato;
  saborAsociado: SaborAsociado;
}
