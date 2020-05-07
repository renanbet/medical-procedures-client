import { Component, OnInit } from '@angular/core';
import { MedicalProcedureService } from 'src/app/services/medical-procedure.service';
import { MedicalProcedure } from 'src/app/models/medical-procedure';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SearchModel } from 'src/app/models/search.model'

class FilterType {
  Approved = 'approved'
  Disapproved = 'disapproved'
  Pending = 'pending'
}

@Component({
  selector: 'app-medical-procedures',
  templateUrl: './medical-procedures.component.html',
  styleUrls: ['./medical-procedures.component.scss']
})
export class MedicalProceduresComponent implements OnInit {
  public filterType = new FilterType()
  public procedures = []
  public showProcedures = []
  public details: MedicalProcedure = null

  public filterProcedures = ''
  public search$: Observable<any>
  public filter: string = ''

  constructor(private medicalProceduresService: MedicalProcedureService,
              private store: Store<{searchReducer}>) {
                this.store.pipe(
                  select('searchReducer')).subscribe((data:SearchModel) => {
                    if (data.search !== undefined) {
                      this.filterProcedures = data.search
                      this.loadShowProcedures()
                    }
                  })
              }

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
          permitido: item.permitido,
          motivo: item.motivo
        }
      })
      this.loadShowProcedures()
    })
  }

  loadShowProcedures () {
    this.showProcedures = this.procedures.filter(item => {
      return this.filterProcedures ?
              item.procedimento.toString().includes(this.filterProcedures) :
              true
    })
    switch (this.filter) {
      case this.filterType.Approved:
        this.showProcedures = this.showProcedures.filter(item => {
          return item.permitido.toLowerCase() === 'sim'
        })
        break;

      case this.filterType.Disapproved:
        this.showProcedures = this.showProcedures.filter(item => {
          return item.permitido.toLowerCase() === 'não'
        })
        break;

      case this.filterType.Pending:
        this.showProcedures = this.showProcedures.filter(item => {
          return item.permitido.toLowerCase() === ''
        })
        break;

      default:
        break;
    }
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
        sexo: '',
        motivo: ''
      }
  }

  closeDetails(data): void {
    if (data) {
      this.load()
    }
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
    this.filter = this.filterType.Approved
    this.loadShowProcedures()
  }

  filterByRepproved() {
    this.filter = this.filterType.Disapproved
    this.loadShowProcedures()
  }

  filterByPending() {
    this.filter = this.filterType.Pending
    this.loadShowProcedures()
  }

  all() {
    this.filter = ''
    this.loadShowProcedures()
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
