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
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
