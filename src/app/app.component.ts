import { Component, OnInit } from '@angular/core';
import {Person} from './persona.model';
import { LoggingService} from './loginservice.service';
import {PersonaService} from './personaservice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo= 'proyecto';
  persona: Person[]=[];


  constructor(private loggingService:LoggingService, private personaservice:PersonaService){}
  ngOnInit():void{
    this.persona= this.personaservice.persona;
  }






}
