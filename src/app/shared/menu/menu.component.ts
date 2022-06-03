import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
 items: MenuItem[] = [] ;

    ngOnInit(): void {
        this.items = [
            {
                label:'Pipes de Angular',
                icon:'pi pi-desktop',
                items:[
                    {
                        label:'Textos y Fechas',
                        icon:'pi pi-calendar',
                        routerLink:'/'
                    },
                    {
                        label:'Números',
                        icon:'pi pi-dollar',
                        routerLink:'numeros'
                    },
                    {
                        label:'No comunes',
                        icon:'pi pi-globe',
                        routerLink:'no-comunes'
                    }
                ]
            },
            {
                label:'Personalizados', 
                icon: 'pi pi-cog'
            },
            
            {
              label: 'Logout',
              icon: 'pi pi-power-off',
              routerLink:'/'
            }
        ];
    }
}


