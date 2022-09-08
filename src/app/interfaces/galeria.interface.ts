export interface GaleriaResponse {
  formatosCreados: Formato[];
  marcasCreadas: Marca[];
  saboresDisponibles: Sabor[];
  saboresCreados: Sabor[];
  saboresResumidos: SaborResumido[];
  formatoTrabajado: Formato;
  marcaTrabajada: Marca;
  saborTrabajado: Sabor;
}

export interface SaborResumido {
  nombreSabor: string;
  formatos: Formato[];
  estadosStock: boolean[];
}

export interface Sabor {
  id: number;
  nombre: string;
  estadoStock: boolean;
  formato: Formato;
  marca: Marca;
}

export interface Formato {
  id: number;
  tipo: string;
}

export interface Marca {
  id: number;
  nombre: string;
  enlace: string;
}
