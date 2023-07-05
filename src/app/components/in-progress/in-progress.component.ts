import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'inProgress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent {

  @Input() todoId!: number;

  todo = {} as Todo;
  todos!: Todo;
  

 constructor(private todoService: TodoService){
 }
 
 getCarById(todoId: number) {
  this.todoService.getCarById(todoId).subscribe((todo: Todo) => {
    this.todos = todo;
  });
}

ngOnInit() {
  this.getCarById(this.todoId);
}

}
