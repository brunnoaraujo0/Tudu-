import { ActivatedRoute, Router } from '@angular/router';
import { TuduItemComponent } from './../tudu-item/tudu-item.component';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  teste: string ='fazer';
  pagina!: number;

  public tudu = [
    {id: 0,
      title: 'Desafio de Design UI/UX',
      description: 'Descrição da tarefa',
      tarefas: ['fazer cadastro', 'limpar servidor'],
      date: '30/01/2021',
      categoria: 'trabalho',
      do: false
     },
     {id: 1,
       title: 'Entrevista com a empresa',
       description: 'Descrição da tarefa',
       tarefas: ['fazer cadastro', 'limpar servidor'],
       date: '30/01/2021',
       categoria: 'estudar',
       do: true
     },
     {id: 2,
      title: 'Contratação',
      description: 'Descrição da tarefa',
      tarefas: ['fazer cadastro', 'limpar servidor'],
      date: '30/01/2021',
      categoria: 'contratar',
      do: false
     },
     {id: 3,
      title: 'Contratação',
      description: 'Descrição da tarefa',
      tarefas: ['fazer cadastro', 'limpar servidor'],
      date: '30/01/2021',
      categoria: 'estudar',
      do: false
     }
     
    ];

    
    constructor(private router: Router,
                private route: ActivatedRoute){
      
    } 
    ngOnInit() {
      this.route.queryParams.subscribe(
        (queryParams: any) => {
          this.pagina = queryParams['pagina'];
        }
      )
    } 
    
   
   

}
