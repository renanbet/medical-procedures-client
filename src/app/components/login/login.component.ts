import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { showLoading, hideLoading, showToast } from 'src/app/reducers/utilities';
import { Store, select } from '@ngrx/store';
import { UtilitiesModel } from 'src/app/models/utilities.model';
import { Toast } from 'src/app/models/toast.model'
import { ToastType } from 'src/app/models/toast-type.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  error: boolean = false;
  showLoading: boolean = false

  constructor(private router: Router,
    private loginService: LoginService,
    private store: Store,
    private utilitiesReducer: Store<{utilitiesReducer}>) {
      this.utilitiesReducer.pipe(
        select('utilitiesReducer')).subscribe((data:UtilitiesModel) => {
          if (data.loading !== undefined) {
            this.showLoading = data.loading
          }
        })
    }

  ngOnInit(): void {}

  login() {
    this.store.dispatch(new showLoading())
    this.loginService.login(this.username, this.password)
      .subscribe((data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        this.router.navigate(['/procedimentos']);
      }, (err) => {
        let message = err.error.error ? err.error.error : 'Ocorreu um erro inesperado.'
        let toast = new Toast(message, new ToastType().error)
        this.store.dispatch(new showToast(toast))
        this.error = true
        this.store.dispatch(new hideLoading())
      })
  }
}
