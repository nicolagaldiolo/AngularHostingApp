import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvidersViewComponent } from './components/providers-view.component';
import {ProviderEditComponent} from './components/provider-edit-component';

const routes: Routes = [
  { path: '', component: ProvidersViewComponent },
  { path: ':id', component: ProviderEditComponent },
];

export const providers_routing: ModuleWithProviders = RouterModule.forChild(routes);
