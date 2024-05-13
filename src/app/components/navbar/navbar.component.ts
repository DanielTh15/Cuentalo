import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

constructor(){

}

activeMenu = false;
counter = 0;

toggleMenu(){
  this.activeMenu = !this.activeMenu;
}



}
