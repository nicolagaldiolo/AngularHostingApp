import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { domains_routing } from './domains.routing';
import { DomainsViewComponent } from './components/domains-view.component';
import { DomainEditComponent } from './components/domains-edit-component';
import { DomainsService } from './services/domains.service';
import { DomainsStore } from './services/domains.store';
import { AppMaterialModule } from '../../app-material.module';
import { ProvidersService } from '../providers/services/providers.service';
import {ProvidersStore} from '../providers/services/providers.store';


@NgModule({
  declarations: [
    DomainsViewComponent,
    DomainEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    domains_routing,
    AppMaterialModule
  ],
  providers: [
    DomainsService,
    DomainsStore,
    ProvidersService,
    ProvidersStore
  ],
  entryComponents: [DomainEditComponent],
})
export class DomainsModule { }

//The entryComponents array is used to define only components that are not found in html and created dynamically with ComponentFactoryResolver.
// Angular needs this hint to find them and compile. All other components should just be listed in the declarations array.
