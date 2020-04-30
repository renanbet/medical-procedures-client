import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss']
})
export class CardCounterComponent {
  @Input() title : string;
  @Input() total : number;
  @Input() icon : string;
}
