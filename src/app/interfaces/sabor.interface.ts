export interface SaborResponse {
  saboresTrabajados: Sabor[];
  saborTrabajado: Sabor;
  mensaje: string;
}

export interface Sabor {
  id: number;
  nombre: string;
  estadoStock: boolean;
}
