import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from './factura';

@Injectable({
  providedIn: 'root'
})
export class MenuRestService {

  constructor(public http: HttpClient ) {


   }

   public buscarTodosLosMenus() :Observable<string[]> {

    return this.http.get<string[]>("http://localhost:3000/menus");
   }
   public buscarTodosLasFacturas() :Observable<Factura[]> {

    return this.http.get<Factura[]>("http://localhost:3000/facturas");
   }
}
