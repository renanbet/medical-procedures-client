import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medical-procedure',
  templateUrl: './medical-procedure.component.html',
  styleUrls: ['./medical-procedure.component.scss']
})
export class MedicalProcedureComponent implements OnInit {
  @Input() details: Object

  constructor() { }

  ngOnInit(): void {
  }

}
