 import {ModuleWithProviders} from '@angular/core';
 import {Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CartelComponent } from './cartel/cartel.component';
import { ConvocatoriaComponent } from './convocatoria/convocatoria.component';
import { MapaComponent } from './mapa/mapa.component';
import { GanadoresComponent } from './ganadores/ganadores.component';
import { ContactoComponent } from './contacto/contacto.component';

// rutas
const appRoutes: Routes = [
    // { path: '', component: CartelComponent},
    {path: '', component: HomeComponent},
    {path: 'convocatoria', component: ConvocatoriaComponent},
    {path: 'mapa', component: MapaComponent},
    {path: 'ganadores', component: GanadoresComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: HomeComponent},
];
 
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);