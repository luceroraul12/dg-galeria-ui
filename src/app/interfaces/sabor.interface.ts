import { Marca } from './marca.interface';
import { Formato } from './formato.interface';
export interface Sabor{
    marca: Marca;
    Formatos: Formato[];
    nombre: string;
}