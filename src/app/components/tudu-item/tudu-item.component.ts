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

  @Input() todoId!: number;

  todo = {} as Todo;
  todos!: Todo;
  
  

  @Input() tuduItem: any = [];
  @Input() teste: any;
  pagina!: number;
  faCheck = faCheck;

  constructor(private router: Router,
    private route: ActivatedRoute, private todoService: TodoService){
} 

    ngOnInit() {
    this.route.queryParams.subscribe(
    (queryParams: any) => {
    this.pagina = queryParams['pagina'];
    }
    )
    this.getCarById(this.todoId);
    } 
  
  showTudu(tu: any) {
    console.log(tu);
    this.router.navigate(['/showTudu'], {queryParams: {'pagina': this.todos.id }});
  }

  feito() {
    
    this.todos.do = !this.todos.do;
    this.updateCar(this.todos);
    this.showTudu(this.todos);
  }

  getCarById(todoId: number) {
    this.todoService.getCarById(todoId).subscribe((todo: Todo) => {
      this.todos = todo;
      console.log(this.todos);
    });
  }

  updateCar(todo: Todo) {
      this.todoService.updateCar(todo).subscribe(() => {
        console.log('deu certo');
      });
    }

   

  }


