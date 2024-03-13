import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss']
})
export class HeaderSidebarComponent {
  isOpen : boolean = false;
  
  constructor( private route:Router){

  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  logOut(){
    localStorage.removeItem("token")
    this.route.navigate(['/login'])

    console.log("removed click")
  }
}
