import { Component, OnInit, Input } from '@angular/core';
import { MedicalProcedureService } from '../../services/medical-procedure.service';
import { MedicalProcedure } from '../../models/medical-procedure';

@Component({
  selector: 'app-medical-procedure-details',
  templateUrl: './medical-procedure-details.component.html',
  styleUrls: ['./medical-procedure-details.component.scss']
})
export class MedicalProcedureDetailsComponent implements OnInit {
  @Input() details: MedicalProcedure = {
    id: 0,
    procedimento: 0,
    permitido: '',
    idade: 0,
    sexo: ''
  }

  constructor(private medicalProceduresService: MedicalProcedureService) { }

  ngOnInit(): void {}

  isAdmin() {
    let user = JSON.parse(localStorage.getItem('user'))
    return user.role === 'admin'
  }

  approve() {
    if (this.isAdmin())
      this.details.permitido = 'Sim'
  }

  pending() {
    if (this.isAdmin())
      this.details.permitido = ''
  }

  disapprove() {
    if (this.isAdmin())
      this.details.permitido = 'Não'
  }

  isApproved(): boolean {
    return this.details.permitido.toLowerCase() === 'sim'
  }

  isRepproved(): boolean {
    return this.details.permitido.toLowerCase() === 'não'
  }

  isPending(): boolean {
    return this.details.permitido === ''
  }

}
