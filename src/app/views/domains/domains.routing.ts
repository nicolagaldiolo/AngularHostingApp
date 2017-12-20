import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomainsViewComponent } from './components/domains-view.component';
import { DomainEditComponent} from './components/domains-edit-component';

const routes: Routes = [
  { path: '', component: DomainsViewComponent },
  { path: ':id', component: DomainEditComponent },
];

export const domains_routing: ModuleWithProviders = RouterModule.forChild(routes);
