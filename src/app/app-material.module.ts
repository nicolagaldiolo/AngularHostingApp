import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule } from '@angular/material';

/*import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

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
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule

  /*MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatInputModule,
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
