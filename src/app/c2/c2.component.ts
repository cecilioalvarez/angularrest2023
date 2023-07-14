import { Component } from '@angular/core';
import { MenuRestService } from '../menu-rest.service';
import { Factura } from '../factura';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.sass']
})
export class C2Component {

  facturas?: Factura[];

  constructor(public menuRestService: MenuRestService) {

    menuRestService.buscarTodosLasFacturas().subscribe(datos => {

      this.facturas = datos;
    })
  }
}
