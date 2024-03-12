import { Component } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss']
})
export class HeaderSidebarComponent {
  isOpen : boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
