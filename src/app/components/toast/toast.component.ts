import { Component, OnInit } from '@angular/core';
import { ToastType } from '../../models/toast-type.model';
import { Store, select } from '@ngrx/store';
import { UtilitiesModel } from 'src/app/models/utilities.model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit {
  public type: string
  public message: string

  constructor(private store: Store,
    private utilitiesReducer: Store<{ utilitiesReducer }>) {
    this.utilitiesReducer.pipe(
      select('utilitiesReducer')).subscribe((data: UtilitiesModel) => {
        if (data.toast !== undefined && data.toast.message && data.toast.type) {
          this.showToast(data.toast.message, data.toast.type)
        }
      })
  }

  ngOnInit(): void { }

  showToast(message, type) {
    this.message = message
    this.type = type
    setTimeout(() => {
      this.hideToast()
    }, 5000);
  }

  hideToast() {
    this.message = ''
    this.type = ''
  }

  getClass() {
    let toastType = new ToastType()
    switch (this.type) {
      case toastType.error:
        return 'is-danger'
      case toastType.info:
        return 'is-info'
      case toastType.success:
        return 'is-success'
      default:
        return 'is-info'
    }
  }

  close() {
    this.hideToast()
  }
}
