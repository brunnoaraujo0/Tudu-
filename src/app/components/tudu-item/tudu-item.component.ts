import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'tuduItem',
  templateUrl: './tudu-item.component.html',
  styleUrls: ['./tudu-item.component.css']
})
export class TuduItemComponent {

  constructor(private router: Router,
    private route: ActivatedRoute, private todoService: TodoService){
} 

    ngOnInit() {
    this.route.queryParams.subscribe(
    (queryParams: any) => {
    this.pagina = queryParams['pagina'];
    }
    )
    this.getTodoById(this.todoId);
    } 

// VARIAVEIS -----------------------------
  @Input() todoId!: number;
  todos!: Todo;
  pagina!: number;


  // ICONES -----------------------------
  faCheck = faCheck;


  

//FUNCOES -----------------------
  showTudu(tu: any) {
    console.log(tu);
    this.router.navigate(['/showTudu'], {queryParams: {'pagina': this.todos.id }});
  }

  feito() { 
    this.todos.do = !this.todos.do;

    if(this.todos.do){
      for(let i=0; i<this.todos.tarefas.length; i++){
        this.todos.tarefas[i].do = true;
      }
    }
    else{
      for(let i=0; i<this.todos.tarefas.length; i++){
        this.todos.tarefas[i].do = false;
      }
    }
    

    this.updateTodo(this.todos);
    this.showTudu(this.todos);

  }

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

  }


