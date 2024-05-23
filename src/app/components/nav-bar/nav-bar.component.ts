import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  ocultar = localStorage.getItem('token');
  constructor (private router : Router){}

  logout(){
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

}
