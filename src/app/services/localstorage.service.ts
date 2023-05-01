import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  // retorna lo que tenga almacenado en la key del localstorage
  getData(key: string){
    return JSON.parse(localStorage.getItem(key)!);
  }

  // almacena lo que necesites en la key del localstorage
  setData(key: string, data:any){
    localStorage.setItem(key, JSON.stringify(data));
  }

  // elimina la informacion almacenada en la key del localstorage
  cleanData(key: string){
    localStorage.removeItem(key);
  }
}
