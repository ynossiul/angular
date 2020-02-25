import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../loginservice.service';
import {PersonaService} from '../personaservice';
import {Person} from '../persona.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  titulo= 'proyecto';
  persona: Person[]=[];


  constructor(private loggingService:LoggingService,
    private personaservice:PersonaService,
    private router:Router){}
  ngOnInit():void{
    this.persona= this.personaservice.persona;
  }
  Onagregar()
  {
    this.router.navigate(['personas/agregar']);
  }
}
