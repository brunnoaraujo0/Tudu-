import { Component } from '@angular/core';
import { faArrowUp, faGripLines, faUsers, faPaperclip, faTag, faPlus, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-show-tudu',
  templateUrl: './show-tudu.component.html',
  styleUrls: ['./show-tudu.component.css']
})
export class ShowTuduComponent {
  public isLogin: boolean = true;
  sobe: boolean = false;
  nInput: number[] = [0];
  idTudu!: number;

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

  faCheck = faCheck;
  faArrowUp = faArrowUp;
  faGripLines = faGripLines;
  faCalendar = faCalendar;
  faUsers = faUsers;
  faPaperclip = faPaperclip;
  faTag = faTag;
  faPlus = faPlus;
  faArrowLeft = faArrowLeft;

  addTarefa() {
    this.nInput.push(0);
  };

  info() {
    this.isLogin = !this.isLogin;
  }
  constructor(private router: Router,
    private route: ActivatedRoute){

} 
ngOnInit() {
this.route.queryParams.subscribe(
(queryParams: any) => {
this.idTudu = queryParams['pagina'];
}
)
}

backHome() {
  this.router.navigate(['/home']);
}
}
