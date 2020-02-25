import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import {LoggingService} from './loginservice.service'
import {PersonaService} from './personaservice';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [LoggingService,PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
