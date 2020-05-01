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

  public details: Object = null

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
          status: item.permitido.toLowerCase() === 'sim' ? 'aprovado' : 
                  item.permitido.toLowerCase() === 'não' ? 'reprovado' : 'pendente'
        }
      })
      this.showProcedures = this.procedures
    })
  }

  showDetails(item): void {
    if(item)
      this.details = item
    else
      this.details = {
        id: 0,
        procedimento: '',
        status: 'pendente',
        idade: '',
        sexo: ''
      }
  }

  closeDetails(): void {
    this.details = null
  }

  isApproved(procedure): boolean {
    return procedure.status === 'aprovado'
  }

  isDisapproved(procedure): boolean {
    return procedure.status === 'reprovado'
  }

  isPending(procedure): boolean {
    return procedure.status === 'pendente'
  }

  filterByApproved() {
    this.showProcedures = this.procedures.filter(item => {
      return item.status === 'aprovado'
    })
  }

  filterByRepproved() {
    this.showProcedures = this.procedures.filter(item => {
      return item.status === 'reprovado'
    })
  }

  filterByPending() {
    this.showProcedures = this.procedures.filter(item => {
      return item.status === 'pendente'
    })
  }

  all() {
    this.showProcedures = this.procedures
  }

  getApprovedTotal() {
    return this.procedures.filter(item => {
      return item.status === 'aprovado'
    }).length
  }

  getDisapprovedTotal() {
    return this.procedures.filter(item => {
      return item.status === 'reprovado'
    }).length
  }

  getPendingTotal() {
    return this.procedures.filter(item => {
      return item.status === 'pendente'
    }).length
  }

  getTotal() {
    return this.procedures.length
  }
}
