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
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule } from '@angular/material';

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
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class AppMaterialModule {}
