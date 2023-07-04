import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'tuduItem',
  templateUrl: './tudu-item.component.html',
  styleUrls: ['./tudu-item.component.css']
})
export class TuduItemComponent {

  @Input() tuduItem: any = [];
  @Input() teste: any;
  pagina!: number;
  faCheck = faCheck;

  feito(tudu: any) {
    tudu.do = !tudu.do;
  }

  constructor(private router: Router,
    private route: ActivatedRoute){

} 
ngOnInit() {
this.route.queryParams.subscribe(
(queryParams: any) => {
this.pagina = queryParams['pagina'];
}
)
} 
  
  showTudu(tu: any) {
    console.log(tu);
    this.router.navigate(['/showTudu'], {queryParams: {'pagina': tu.id }});
  }
}
