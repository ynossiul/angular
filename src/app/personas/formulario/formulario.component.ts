import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Person} from '../../persona.model';
import {LoggingService}  from '../../loginservice.service';
import {PersonaService} from '../../personaservice';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']

})
export class FormularioComponent implements OnInit {
  //@Output() personaCreada= new EventEmitter<Person>();
  nombreInput:string;
  apellidoInput:string;
  //@ViewChild("nombreInput") nombreInput: ElementRef;
  //@ViewChild("apellidoInput") apellidoInput: ElementRef;
  index:number;
  modoEdicion:number;



  constructor(
    private personaservice:PersonaService,
    private router:Router,
    private route:ActivatedRoute)
  { this.personaservice.saludar.subscribe((indice:number)=>alert("El indice es: "+indice));}


  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
    this.modoEdicion=+this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion!=null && this.modoEdicion===1)
    {
      let persona:Person=this.personaservice.encontratPersona(this.index);
      this.nombreInput=persona.nombre;
      this.apellidoInput=persona.apellido;

    }
  }
  onGuardarPersona()
  {
    let persona:Person=new Person(this.nombreInput,this.apellidoInput);
    if(this.modoEdicion!=null && this.modoEdicion===1)
    {
      this.personaservice.modificarPersona(this.index,persona);

    }
    else
    {
      this.personaservice.onaddperson(persona);

    }
    this.router.navigate(['']);


    //this.personaCreada.emit(personas);

  }
  eliminarPersona()
  {
    if(this.index !=null)
    {
      this.personaservice.eliminarPersona(this.index);

    }
    this.router.navigate(['']);
  }

}
