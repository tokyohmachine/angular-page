import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YellowSideComponent } from './components/yellow-side/yellow-side.component';
import { BlackSideComponent } from './components/black-side/black-side.component';

@NgModule({
  declarations: [
    AppComponent,
    YellowSideComponent,
    BlackSideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
