import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
@Input()headerText: string = '';
@Input()subHeaderText: string = '';
@Input()cardIcon: string = '';
}
