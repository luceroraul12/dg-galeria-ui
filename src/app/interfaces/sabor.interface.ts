import { Marca } from './marca.interface';
import { Formato } from './formato.interface';
export interface Sabor{
    marca: Marca;
    formatos: Formato[];
    nombre: string;
}