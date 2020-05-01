import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setSearch } from 'src/app/ngrx';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = false
  public search: string = ''

  constructor(private router: Router,
    private store: Store) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  async globalSearch() {
    this.store.dispatch(new setSearch(this.search))
  }

  cleanGlobalSearch () {
    if (this.search === '') {
      this.globalSearch()
    }
  }
}
