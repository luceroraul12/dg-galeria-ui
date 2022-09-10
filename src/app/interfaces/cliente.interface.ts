import { Marca } from './marca.interface';
import { Formato } from './formato.interface';
export interface ClienteResponse {
  resumen: Resumen;
  mensaje: string;
}

export interface Resumen {
  marcaElegida: Marca;
  saboresResumidos: SaboresResumido[];
}

export interface SaboresResumido {
  nombreSabor: string;
  formatosDisponibles: Formato[];
}
