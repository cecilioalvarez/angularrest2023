import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MenuRestService } from '../menu-rest.service';
@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.sass']
})
export class C1Component {

  menuLista?:string[];

 constructor(public menuService:MenuRestService) {

  this.menuService.buscarTodosLosMenus().subscribe(datos=>{

    this.menuLista=datos;
    console.log(datos);

  })

 }

}
