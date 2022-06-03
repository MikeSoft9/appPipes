import { NgModule } from '@angular/core';


import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';




@NgModule({
  
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    FieldsetModule
    
  ]
})
export class PrimeNgModule { }
