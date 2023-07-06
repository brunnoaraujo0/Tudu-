import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'inProgress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent {

  
  constructor(private todoService: TodoService){
  }


  ngOnInit() {
  this.getTodoById(this.todoId);
  }

  //VARIAVEIS --------------------
  @Input() todoId!: number;
  todos!: Todo;
  done: number =0;
  progress: number = 0;
  do: number = 0;


  //FUNCOES --------------------
 getTodoById(todoId: number) {
  this.todoService.getTodoById(todoId).subscribe((todo: Todo) => {
    this.todos = todo;
    this.showProgress()
  });
 
}

  showProgress(){
    for(let i=0; i < this.todos.tarefas.length; i++){
      if(this.todos.tarefas[i].do){
        this.done= this.done + 1;
      }
    }
    this.progress = Math.floor((this.done / this.todos.tarefas.length)*100);
    
  }

}
