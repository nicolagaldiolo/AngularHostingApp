import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-provider-edit',
  template: `
    <h3>Aggiungi Fornitore</h3>
    <form novalidate #f="ngForm" (ngSubmit)="dialogRef.close(f)">

      <div fxLayout="column" fxLayoutGap="8px">

        <mat-input-container>
          <input matInput ngModel name="name" placeholder="Fornitore" required>
        </mat-input-container>

        <mat-input-container>
          <input matInput ngModel name="website" placeholder="Url" required>
        </mat-input-container>

        <mat-input-container>
          <input matInput ngModel name="label" placeholder="Colore" required>
        </mat-input-container>

      </div>

      <mat-dialog-actions align="end">
        <button md-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button md-button color="accent" [disabled]="f.invalid">Save Book</button>
      </mat-dialog-actions>
      
    </form>

  `,
  styles: []
})

export class ProviderEditComponent {

  constructor( public dialogRef: MatDialogRef<ProviderEditComponent> ) {}

}
