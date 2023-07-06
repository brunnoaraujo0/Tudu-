import { Component} from '@angular/core';
import { faArrowUp, faGripLines } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {


//VARIAVEIS ---------------------
  public isLogin: boolean = true;
  sobe: boolean = false;

  //ICONES ---------------------
  faArrowUp = faArrowUp;
  faGripLines = faGripLines;
  
//FUNCOES ---------------------
  info() {
    this.isLogin = !this.isLogin;
  }

  login() { 
    this.sobe = !this.sobe;

  }

}
