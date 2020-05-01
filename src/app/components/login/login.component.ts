import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string = '';
  password : string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  login() {
    let user = {
      username: this.username,
      role: this.username
    }
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/procedimentos']);
  }
}
