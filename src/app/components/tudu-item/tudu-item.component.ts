import { Component, Input } from '@angular/core';

@Component({
  selector: 'tuduItem',
  templateUrl: './tudu-item.component.html',
  styleUrls: ['./tudu-item.component.css']
})
export class TuduItemComponent {

  @Input() tuduItem: any = [];
  @Input() teste: any;

  constructor(){}
}
