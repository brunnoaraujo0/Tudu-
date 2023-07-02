import { Component } from '@angular/core';
import { faArrowUp, faGripLines, faUsers, faPaperclip, faTag, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  
  
  public isLogin: boolean = true;
  sobe: boolean = false;
  nInput: number[] = [0];

  faArrowUp = faArrowUp;
  faGripLines = faGripLines;
  faCalendar = faCalendar;
  faUsers = faUsers;
  faPaperclip = faPaperclip;
  faTag = faTag;
  faPlus = faPlus;
  
  addTarefa() {
    this.nInput.push(0);
  };

  info() {
    this.isLogin = !this.isLogin;
  }

  login() { 
    this.sobe = !this.sobe;

  }
  
    
}
