import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
