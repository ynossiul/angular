import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core'
import {Person} from './persona.model'

@Injectable()
export class DataService
{
  constructor(private httpClient: HttpClient){}
  //guardarPersonas
  guardarPersonas(personas:Person[])
  {
    this.httpClient.post('https://listado-personas-64f05.firebaseio.com/datos.json',personas).
    subscribe(response=>{console.log("resultado guardar Personas: "+ response),
     error=> console.log("error al guardar Personas: "+ error)}
   );

  }
}
