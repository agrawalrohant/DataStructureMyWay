import { Component } from '@angular/core';
import { UtilConstants } from './Common/UtilConstants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DS-my-way';
  leftNav = UtilConstants.PRIMARY_LEFT_NAV
}
