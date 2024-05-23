import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio= inject(LoginService);
  email: any;
  password: any;
  userType: any;
  token: any;

  login(formulario: any) {
    this.servicio.postLogin(formulario.value).subscribe(p=>{
      this.token = p.accessToken;
      if(this.token!=''){
        localStorage.setItem('token', 'true');
        window.location.href = '/productos'; 
      }
    })
  }
}
