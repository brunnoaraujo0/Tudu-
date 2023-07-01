
import { Component } from '@angular/core';
import { faHouse, faGripLines, faCalendar, faUser, faPlus} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './components/modal-login/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  faHouse = faHouse;
  faGripLines = faGripLines;
  faCalendar = faCalendar;
  faUser = faUser;
  faPlus = faPlus;


  mostrarMenu: boolean = false;
  constructor(private authService: AuthService){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe((mostrar: boolean) => this.mostrarMenu = mostrar);
    ;
  }
}
