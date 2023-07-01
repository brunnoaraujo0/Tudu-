import { Component, Input } from '@angular/core';

@Component({
  selector: 'inProgress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent {
  @Input() tuduItem: any = [];
  
 login() {
  console.log(this.tuduItem)
 }
 constructor(){
  this.login();
 }
}
