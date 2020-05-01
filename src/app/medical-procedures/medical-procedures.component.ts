import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-procedures',
  templateUrl: './medical-procedures.component.html',
  styleUrls: ['./medical-procedures.component.scss']
})
export class MedicalProceduresComponent implements OnInit {
  public procedures = [
    {
      id: 1,
      procedimento: 1234,
      status: 'aprovado',
      sexo: 'Masculino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'aprovado',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'aprovado',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'aprovado',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'aprovado',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'aprovado',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'pendente',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'aprovado',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'reprovado',
      sexo: 'Feminino',
      idade: 23
    },
    {
      id: 2,
      procedimento: 4321,
      status: 'aprovado',
      sexo: 'Feminino',
      idade: 23
    }
  ]

  public showProcedures = []

  public details: Object = null

  constructor() { }

  ngOnInit(): void {
    this.showProcedures = this.procedures
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
