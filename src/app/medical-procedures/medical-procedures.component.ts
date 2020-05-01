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

  public details: Object = null

  constructor() { }

  ngOnInit(): void {
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
}
