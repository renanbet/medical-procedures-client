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
    sexo: '',
    motivo: ''
  }
  public title = 'Novo procedimento'

  public validate = {
    procedimento: true,
    idade: true,
    motivo: true
  }

  constructor(private medicalProceduresService: MedicalProcedureService) { }

  ngOnInit(): void {
    if (this.details.id !== 0) {
      this.title = `Procedimento ${this.details.procedimento}`
    }
  }

  save(): void {
    if (!this.isValid()) {
      return
    }
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

  back () {
    this.close.next(false)
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

  remove(): void {
    this.medicalProceduresService.remove(this.details.id).subscribe(() => {
      this.close.next(true)
    });
  }

  isValid(): boolean {
    this.validate.procedimento = true
    this.validate.idade = true
    this.validate.motivo = true
    let valid = true
    if (this.details.procedimento > 9999999) {
      this.validate.procedimento = false
      valid = false
    }
    if (this.details.idade > 999) {
      this.validate.idade = false
      valid = false
    }
    if (this.details.motivo.length > 254) {
      this.validate.motivo = false
      valid = false
    }
    return valid
  }
}
