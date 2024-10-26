/* import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Importa HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Asegúrate de importar provideHttpClient y withFetch
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinationsComponent } from './destinations/destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withFetch()) // Configuración para habilitar fetch en HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
