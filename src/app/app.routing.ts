import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'providers',
        loadChildren: 'app/views/providers/providers.module#ProvidersModule'
      },
      { path: '**', redirectTo: 'providers' }
    ])
  ],
  providers: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}