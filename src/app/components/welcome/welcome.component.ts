import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  sobe: boolean = false;

  login() { 
    this.sobe = !this.sobe;
    console.log(this.sobe)
  }

}
