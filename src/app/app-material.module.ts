import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
/*import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
*/

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatIconModule
  /*MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSlideToggleModule*/
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class AppMaterialModule {}
