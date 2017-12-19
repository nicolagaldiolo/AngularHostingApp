import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { providers_routing } from './providers.routing';
import { ProvidersViewComponent } from './components/providers-view.component';
import { ProviderEditComponent } from './components/provider-edit-component';
import { ProvidersService } from './services/providers.service';
import { ProvidersStore } from './services/providers.store';
import { AppMaterialModule } from '../../app-material.module';


@NgModule({
  declarations: [
    ProvidersViewComponent,
    ProviderEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    providers_routing,
    AppMaterialModule

  ],
  providers: [
    ProvidersService,
    ProvidersStore
  ],
  entryComponents: [ProviderEditComponent],
})
export class ProvidersModule { }

//The entryComponents array is used to define only components that are not found in html and created dynamically with ComponentFactoryResolver.
// Angular needs this hint to find them and compile. All other components should just be listed in the declarations array.
