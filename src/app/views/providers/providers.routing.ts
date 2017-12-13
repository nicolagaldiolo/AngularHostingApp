import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvidersViewComponent } from './components/providers-view.component';

const routes: Routes = [
  { path: '', component: ProvidersViewComponent },
];

export const providers_routing: ModuleWithProviders = RouterModule.forChild(routes);