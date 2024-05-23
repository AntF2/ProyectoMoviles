import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: any
  password: any
  token: any
  userType: any
  servicio = inject(LoginService);

  registro(datos:any){
    this.servicio.postUsers(datos.value).subscribe();
  }
}
