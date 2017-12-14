import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { providers_routing } from './providers.routing';
import { ProvidersViewComponent } from './components/providers-view.component';
import { ProvidersService } from './services/providers.service';
import { ProvidersStore } from './services/providers.store';
import { AppMaterialModule } from '../../app-material.module';


@NgModule({
  declarations: [
    ProvidersViewComponent
  ],
  imports: [
    CommonModule,
    providers_routing,
    AppMaterialModule

  ],
  providers: [
    ProvidersService,
    ProvidersStore
  ]
})
export class ProvidersModule { }
