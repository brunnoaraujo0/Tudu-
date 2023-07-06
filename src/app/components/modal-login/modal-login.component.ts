import { Usuario } from './usuario';
import { Component} from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'modallogin',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {
  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService){}
  ngOnInit(){

  }
  
//FUNCOES
  fazerLogin(){
   this.authService.fazerLogin(this.usuario);
  }
}
