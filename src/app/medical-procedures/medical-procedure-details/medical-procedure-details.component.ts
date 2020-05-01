import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medical-procedure-details',
  templateUrl: './medical-procedure-details.component.html',
  styleUrls: ['./medical-procedure-details.component.scss']
})
export class MedicalProcedureDetailsComponent implements OnInit {
  @Input() details: Object = {
    id: 0,
    procedimento: '',
    status: 'pendente',
    idade: '',
    sexo: ''
  }

  constructor() { }

  ngOnInit(): void {}

  isAdmin() {
    let user = JSON.parse(localStorage.getItem('user'))
    return user.role === 'admin'
  }

  approve() {
    if (this.isAdmin())
      this.details.status = 'aprovado'
  }

  pending() {
    if (this.isAdmin())
      this.details.status = 'pendente'
  }

  disapprove() {
    if (this.isAdmin())
      this.details.status = 'reprovado'
  }

  isApproved(): boolean {
    return this.details.status === 'aprovado'
  }

  isRepproved(): boolean {
    return this.details.status === 'reprovado'
  }

  isPending(): boolean {
    return this.details.status === 'pendente'
  }

}
