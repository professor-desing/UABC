import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './components/app.routing';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartelComponent } from './components/cartel/cartel.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { GanadoresComponent } from './components/ganadores/ganadores.component';
import { ContactoComponent } from './components/contacto/contacto.component';
// import { appRoutingProviders } from './components/app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartelComponent,
    ConvocatoriaComponent,
    MapaComponent,
    GanadoresComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
