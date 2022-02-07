import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TreeTableModule } from 'primeng/treetable';
import {RippleModule} from 'primeng/ripple';
import {SpeedDialModule} from 'primeng/speeddial';
import {ToastModule} from 'primeng/toast';


const importPackagesPrimeNG = [
  TreeTableModule,
  DynamicDialogModule,
  ButtonModule,
  RippleModule,
  SpeedDialModule,
  ToastModule
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
