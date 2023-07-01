import { Component } from '@angular/core';
import { faHouse, faGripLines, faCalendar, faUser, faPlus} from '@fortawesome/free-solid-svg-icons';


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

}
