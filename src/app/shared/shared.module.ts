import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TreeTableModule } from 'primeng/treetable';
import {RippleModule} from 'primeng/ripple';


const importPackagesPrimeNG = [
  TreeTableModule,
  DynamicDialogModule,
  ButtonModule,
  RippleModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...importPackagesPrimeNG
  ],
  exports : [
    ...importPackagesPrimeNG
  ],
})
export class SharedModule { }
