import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import {TreeTableModule} from 'primeng/treetable';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { AddNodeComponent } from './add-node/add-node.component';


const importPackagesPrimeNG = [
  TreeTableModule,
  DynamicDialogModule
]

@NgModule({
  declarations: [
    AppComponent,
    AddNodeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ...importPackagesPrimeNG
  ],
  exports : [
    ...importPackagesPrimeNG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
