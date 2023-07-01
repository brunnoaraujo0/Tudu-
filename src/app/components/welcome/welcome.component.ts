import { Component} from '@angular/core';
import { faArrowUp, faGripLines } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public isLogin: boolean = true;
  sobe: boolean = false;

  faArrowUp = faArrowUp;
  faGripLines = faGripLines;
  

  info() {
    this.isLogin = !this.isLogin;
  }

  login() { 
    this.sobe = !this.sobe;

  }

}
