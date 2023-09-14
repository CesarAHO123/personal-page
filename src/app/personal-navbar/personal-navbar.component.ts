import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-personal-navbar',
  templateUrl: './personal-navbar.component.html',
  styleUrls: ['./personal-navbar.component.css']
})
export class PersonalNavbarComponent {
  phoneSize:boolean=false;
  showFiller = false;

  constructor() { }

  ngOnInit() {

    this.getPhoneSize()

  }
  isSidenavOpen = true;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  getPhoneSize()
  {
    if (window.innerWidth <= 767) {
      this.phoneSize=true;
    }
    else
    {
      this.phoneSize=false;
    }
  }
  openSidenav() {
    console.log("open")
  }

  closeSidenav() {
  }
}

