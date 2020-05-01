import { Component, OnInit } from '@angular/core';
import { MedicalProcedureService } from '../services/medical-procedure.service';
import { MedicalProcedure } from '../models/medical-procedure';

@Component({
  selector: 'app-medical-procedures',
  templateUrl: './medical-procedures.component.html',
  styleUrls: ['./medical-procedures.component.scss']
})
export class MedicalProceduresComponent implements OnInit {
  public procedures = []

  public showProcedures = []

  public details: MedicalProcedure = null

  constructor(private medicalProceduresService: MedicalProcedureService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.medicalProceduresService.getProcedures()
    .subscribe((medicalProcedures: MedicalProcedure[]) => {
      this.procedures = medicalProcedures.map(item => {
        return {
          id: item.id,
          procedimento: item.procedimento,
          idade: item.idade,
          sexo: `${item.sexo.charAt(0).toUpperCase()}${item.sexo.substring(1)}`,
          status: this.getStatus(item.permitido),
          permitido: item.permitido
        }
      })
      this.showProcedures = this.procedures
    })
  }

  getStatus(permitted) {
    return permitted.toLowerCase() === 'sim' ? 'Aprovado' : 
              permitted.toLowerCase() === 'não' ? 'Reprovado' : 'Pendente'
  }

  showDetails(item): void {
    if(item)
      this.details = item
    else
      this.details = {
        id: 0,
        procedimento: 0,
        permitido: '',
        idade: 0,
        sexo: ''
      }
  }

  closeDetails(): void {
    this.details = null
  }

  isApproved(procedure): boolean {
    return procedure.permitido.toLowerCase() === 'sim'
  }

  isDisapproved(procedure): boolean {
    return procedure.permitido.toLowerCase() === 'não'
  }

  isPending(procedure): boolean {
    return procedure.permitido.toLowerCase() === ''
  }

  filterByApproved() {
    this.showProcedures = this.procedures.filter(item => {
      return item.permitido.toLowerCase() === 'sim'
    })
  }

  filterByRepproved() {
    this.showProcedures = this.procedures.filter(item => {
      return item.permitido.toLowerCase() === 'não'
    })
  }

  filterByPending() {
    this.showProcedures = this.procedures.filter(item => {
      return item.permitido === ''
    })
  }

  all() {
    this.showProcedures = this.procedures
  }

  getApprovedTotal() {
    return this.procedures.filter(item => {
      return item.permitido.toLowerCase() === 'sim'
    }).length
  }

  getDisapprovedTotal() {
    return this.procedures.filter(item => {
      return item.permitido.toLowerCase() === 'não'
    }).length
  }

  getPendingTotal() {
    return this.procedures.filter(item => {
      return item.permitido === ''
    }).length
  }

  getTotal() {
    return this.procedures.length
  }
}
