import { Usuario } from './../modal-login/usuario';
import { Component } from '@angular/core';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../modal-login/auth.service';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private authService: AuthService,  private todoService: TodoService)
  {this.usuario.email = 'ff'; this.usuario.senha = 'hh'}


  ngOnInit(){
    this.getTodos();
  }



  //VARIAVEIS -----------------------------------------------
  todos!: Todo[];
  done: number= 0;
  do: number = 0;
  public usuario: Usuario = new Usuario();

  //ICONES -----------------------------------------------
  faLogout = faArrowRightFromBracket;

//FUNCAOES -----------------------------------------------
  getTodos() {
    this.todoService.getTodos().subscribe((todo: Todo[]) => {
      this.todos = todo;

      for(let i=0; i <= this.todos.length ; i++){
        if(this.todos[i].do){
          this.done++;
          console.log(this.done);
        }else {
          this.do++;
          console.log(this.done);
        }
      }
        
      
    });
  }


  logout(){
   this.authService.fazerLogin(this.usuario);
  }

}
