export interface FormatoResponse {
  formatoTrabajado: Formato;
  formatosTrabajados: Formato[];
  mensaje: string;
}

export interface Formato {
  id: number;
  tipo: string;
  estadoStock: boolean;
}
