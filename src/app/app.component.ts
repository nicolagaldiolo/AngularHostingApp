import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sideNav = [
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Domini', path: 'domains' },
    { name: 'Fornitori', path: 'providers' }
  ];

}
