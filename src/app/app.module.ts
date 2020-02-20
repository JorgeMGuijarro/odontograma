import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OdontogramaComponent } from './odontograma/odontograma.component';

@NgModule({
  declarations: [
    AppComponent,
    OdontogramaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
