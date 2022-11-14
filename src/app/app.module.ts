import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HeatComponent } from './heat/heat.component';
import { MarkersComponent } from './markers/markers.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HeatComponent,
    MarkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
