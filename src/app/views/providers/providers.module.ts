import { NgModule } from '@angular/core';

import { providers_routing } from './providers.routing';
import { ProvidersViewComponent } from './components/providers-view.component';
import { ProvidersService } from './services/providers.service';
import { ProvidersStore } from './services/providers.store';


@NgModule({
  declarations: [
    ProvidersViewComponent
  ],
  imports: [
    providers_routing
  ],
  providers: [
    ProvidersService,
    ProvidersStore
  ]
})
export class ProvidersModule { }
