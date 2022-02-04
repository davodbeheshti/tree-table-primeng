import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import {TreeTableModule} from 'primeng/treetable';


const importPackagesPrimeNG = [
  TreeTableModule
]

@NgModule({
  declarations: [
    AppComponent
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
