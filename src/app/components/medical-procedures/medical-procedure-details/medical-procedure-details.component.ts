import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MedicalProcedureService } from 'src/app/services/medical-procedure.service';
import { MedicalProcedure } from 'src/app/models/medical-procedure';

@Component({
  selector: 'app-medical-procedure-details',
  templateUrl: './medical-procedure-details.component.html',
  styleUrls: ['./medical-procedure-details.component.scss']
})
export class MedicalProcedureDetailsComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Input() details: MedicalProcedure = {
    id: 0,
    procedimento: 0,
    permitido: '',
    idade: 0,
    sexo: ''
  }

  constructor(private medicalProceduresService: MedicalProcedureService) { }

  ngOnInit(): void {}

  save(): void {
    if (this.details.id !== 0) {
      this.medicalProceduresService.update(this.details.id, this.details).subscribe(() => {
        this.close.next(true)
      });
    } else {
      this.medicalProceduresService.insert(this.details).subscribe(() => {
        this.close.next(true)
      });
    }
  }

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

  isNew(): boolean {
    return this.details.id === 0
  }

}
