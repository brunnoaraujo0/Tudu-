import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowUp, faGripLines } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'modallogin',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {
  faArrowUp = faArrowUp;
  faGripLines = faGripLines;

  sobe: boolean = false;

  @Output() up = new EventEmitter();

  login() { 
    this.sobe = !this.sobe;
    this.up.emit({novo: this.sobe})
  }


}
