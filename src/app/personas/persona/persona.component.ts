import { Component, OnInit,Input } from '@angular/core';
import{Person} from '../../persona.model';
import {PersonaService} from '../../personaservice'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona:Person;
  @Input() indice:number;

  constructor(private person:PersonaService) { }

  ngOnInit(): void {
  }

  emitirSaludo()
  {
    this.person.saludar.emit(this.indice);
  }

}
