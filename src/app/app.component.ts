import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rodrigo Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sitio='http://www.google.com';
  sueldos = [1700,1600,1900];
  activo = true;

  esActivo(){
    if(this.activo)
      return 'Trabajador activo';
    else 
      return 'Trabajador inactivo';
  }

  ultimos3sueldos(){
    let suma = 0 ;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }

  contador=1;

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

}
