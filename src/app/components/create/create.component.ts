import { Component } from '@angular/core';
import { faArrowUp, faGripLines, faUsers, faPaperclip, faTag, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  
  constructor(private router: Router, private todoService: TodoService){
  }

  //VARIAVEIS -------------------------------------------------
  public isLogin: boolean = true;
  sobe: boolean = false;
  nInput: number[] = [0];
  todos: Todo = {id: 0, title: "",description: "", tarefas: [], date: "",categoria: "", do: false}
  title!: string;
  desciption!: string;
  categoria!: string;
  date!: string;
  subtarefas: any = {subtarefa: "", do: false};
  sub!: string;
  tarefas!: any[];

  //ICONES -------------------------------------------------
  faArrowUp = faArrowUp;
  faGripLines = faGripLines;
  faCalendar = faCalendar;
  faUsers = faUsers;
  faPaperclip = faPaperclip;
  faTag = faTag;
  faPlus = faPlus;
  


   //FUNCOES -------------------------------------------------
  addTarefa() {
    this.nInput.push(0);
  };

  info() {
    this.isLogin = !this.isLogin;
  }

  login() { 
    this.sobe = !this.sobe;

  }
  criar(){
    this.todos.title = this.title;
    this.todos.description = this.desciption;
    this.todos.categoria = this.categoria;
    this.todos.date = this.date;
    this.subtarefas.subtarefa = this.sub;
    this.todos.tarefas.push(this.subtarefas);
    if(this.title == undefined && this.desciption == undefined) {
      alert("Preencha os dados do ToDo!");
    }else {
      this.createTodo();
    }
    
  }
  createTodo() {  
      this.todoService.createTodo(this.todos).subscribe(() => {
        alert("Tarefa criada com sucesso!");  
        this.router.navigate(['/home']);
      });
    }
  }
    

