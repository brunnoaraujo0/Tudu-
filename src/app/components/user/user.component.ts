import { Usuario } from './../modal-login/usuario';
import { Component } from '@angular/core';
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../modal-login/auth.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  faLogout = faArrowRightFromBracket;
  public usuario: Usuario = new Usuario();

  

  constructor(private authService: AuthService){this.usuario.email = 'ff'; this.usuario.senha = 'hh'}
  ngOnInit(){

  }

  logout(){
   this.authService.fazerLogin(this.usuario);
  }

}
