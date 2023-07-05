import { TodoService } from './../../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';




@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

    pagina!: number;
    todo = {} as Todo;
    todos!: Todo[];
    
    
    constructor(private router: Router,
                private route: ActivatedRoute, private todoService: TodoService ){ 
    } 

    getCars() {
      this.todoService.getCars().subscribe((todo: Todo[]) => {
        this.todos = todo;
      });
    }
    

    
    ngOnInit() {
      this.route.queryParams.subscribe(
        (queryParams: any) => {
          this.pagina = queryParams['pagina'];
        }
      )
      this.getCars();
    } 
    
   
    showTudu(tu: any) {
      this.router.navigate(['/showTudu'], {queryParams: {'pagina': tu.id }});
    }

}
