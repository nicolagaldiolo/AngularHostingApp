import { Component } from '@angular/core';
import { ProvidersService } from '../services/providers.service';
import { ProvidersStore } from '../services/providers.store';

@Component({
  selector: 'app-providers-view',
  template: `
    <h1>Providers</h1>
  `
})

export class ProvidersViewComponent {

  constructor( private store: ProvidersStore, private actions: ProvidersService){
    this.actions.getAll();
  }

}