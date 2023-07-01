import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'tuduItem',
  templateUrl: './tudu-item.component.html',
  styleUrls: ['./tudu-item.component.css']
})
export class TuduItemComponent {

  @Input() tuduItem: any = [];
  @Input() teste: any;

  faCheck = faCheck;

  feito(tudu: any) {
    tudu.do = !tudu.do;
  }

  constructor(){}
}
