import { Component} from '@angular/core';
import { faArrowUp, faGripLines } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public isLogin: boolean = false;

  info() {
    this.isLogin = !this.isLogin;
  }

  faArrowUp = faArrowUp;
  faGripLines = faGripLines;

  sobe: boolean = false;


  login() { 
    this.sobe = !this.sobe;

  }

}
