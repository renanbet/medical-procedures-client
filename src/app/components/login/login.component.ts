import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: boolean = false; 

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.username, this.password)
      .subscribe((data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        this.router.navigate(['/procedimentos']);
      }, (err) => {
        this.error = true
      })
  }
}
