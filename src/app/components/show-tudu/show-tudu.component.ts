import { Component, Input } from '@angular/core';
import { faArrowUp, faGripLines, faUsers, faPaperclip, faTag, faPlus, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-show-tudu',
  templateUrl: './show-tudu.component.html',
  styleUrls: ['./show-tudu.component.css']
})
export class ShowTuduComponent {

  constructor(private router: Router,
    private route: ActivatedRoute, private todoService: TodoService){
  } 

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
    this.idTudu = queryParams['pagina'];
    }
      )
    this.getTodoById(this.idTudu);
    }


  //VARIAVEIS -------------------------------------------
  @Input() todoId!: number;
  public isLogin: boolean = true;
  sobe: boolean = false;
  nInput: number[] = [0];
  idTudu!: number;
  todos!: Todo;

   //ICONES -------------------------------------------
  faCheck = faCheck;
  faArrowUp = faArrowUp;
  faGripLines = faGripLines;
  faCalendar = faCalendar;
  faUsers = faUsers;
  faPaperclip = faPaperclip;
  faTag = faTag;
  faPlus = faPlus;
  faArrowLeft = faArrowLeft;

  //FUNCOES -------------------------------------------
  getTodoById(todoId: number) {
      this.todoService.getTodoById(todoId).subscribe((todo: Todo) => {
        this.todos = todo;
      });
    }

    updateTodo(todo: Todo) {
      this.todoService.updateTodo(todo).subscribe(() => {
        console.log('deu certo');
      });
    }


  addTarefa() {
    this.nInput.push(0);
  };

  info() {
    this.isLogin = !this.isLogin;
  }

  backHome() {
  this.router.navigate(['/home']);
  }

  checked(id: number){
    this.todos.tarefas[id].do = !this.todos.tarefas[id].do;
    console.log(id);
    this.updateTodo(this.todos);
  }
}
