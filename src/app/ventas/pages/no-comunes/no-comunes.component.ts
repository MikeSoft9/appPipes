import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  nombre: string = 'Mike';
  genero: string = 'Masculino'

  invitacionMapa= {
    'Masculino': 'invitarlo',
    'Femenino':'invitarla'
  }

  //i18nPlural

  clientes: string [] = ['Maria', 'Visanis','Mike','JuanToño']
  clientesMap= {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other':'tenemos # esperando'
  }

  cambiarCliente(){
    this.nombre = "Visanis";
    this.genero = "Femenino"

  }

  
}
