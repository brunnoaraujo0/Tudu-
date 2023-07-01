import { TuduItemComponent } from './../tudu-item/tudu-item.component';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
 

  public tudu = [
    {id: 0,
      title: 'Desafio de Design UI/UX',
      description: 'Descrição da tarefa',
      tarefas: ['fazer cadastro', 'limpar servidor'],
      date: '30/01/2021',
      categoria: 'trabalho'
     },
     {id: 1,
       title: 'Entrevista com a empresa',
       description: 'Descrição da tarefa',
       tarefas: ['fazer cadastro', 'limpar servidor'],
       date: '30/01/2021',
       categoria: 'estudar'
     },
     {id: 2,
      title: 'Contratação',
      description: 'Descrição da tarefa',
      tarefas: ['fazer cadastro', 'limpar servidor'],
      date: '30/01/2021',
      categoria: 'contratar'
     }
     
    ];


    constructor(){
      
  
    }    
}
