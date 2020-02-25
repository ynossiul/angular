import {Person} from './persona.model';
import {LoggingService} from './loginservice.service'
import {Injectable,EventEmitter} from '@angular/core'
import {DataService} from './data_services'

@Injectable()
export class PersonaService
{
    persona: Person[]=[new Person("luis","calderon")];

    saludar= new EventEmitter<number>();
    constructor(private login:LoggingService, private dataservice:DataService){}

    onaddperson(persona:Person)
    {
      this.login.enviaMensajeAConsol("Enviamos persona: "+ persona+ " nombre "+persona.nombre+" apellido "+persona.apellido);
      this.persona.push(persona);
      this.dataservice.guardarPersonas(persona);

    }
    encontratPersona(index:number)
    {
      let persona: Person= this.persona[index];
      return persona;
    }

    modificarPersona(index:number, persona:Person)
    {
      let persona1=this.persona[index];
      persona1.nombre=persona.nombre;
      persona1.apellido=persona.apellido;
    }
    eliminarPersona(index:number)
    {
      this.persona.splice(index,1);
    }
}
