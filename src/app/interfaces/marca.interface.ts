export interface MarcaResponse {
  marcaTrabajada: Marca;
  marcasTrabajadas: Marca[];
  mensaje: string;
}

export interface Marca {
  id: number;
  nombre: string;
  enlace: string;
  estadoStock: boolean;
}
