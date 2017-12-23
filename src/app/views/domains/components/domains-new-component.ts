import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProvidersService } from '../../providers/services/providers.service';
import { ProvidersStore } from '../../providers/services/providers.store';

@Component({
  selector: 'app-domain-new',
  template: `
    <h3>Aggiungi nuovo dominio</h3>
    <form #f="ngForm" (ngSubmit)="dialogRef.close(f)">
    
      <div class="example-container">
        
        <mat-form-field>
          <mat-label>Url</mat-label>
          <input matInput ngModel name="url" placeholder="www.website.com" required>
        </mat-form-field>
        
        <mat-form-field>
          <mat-select ngModel name="domain" placeholder="Dominio">
            <mat-option>Nessuno</mat-option>
            <mat-option *ngFor="let provider of this.storeProviders.providers" [value]="provider.id">{{provider.name}}</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-select ngModel name="hosting" placeholder="Hosting">
            <mat-option>Nessuno</mat-option>
            <mat-option *ngFor="let provider of this.storeProviders.providers" [value]="provider.id">{{provider.name}}</mat-option>
          </mat-select>
        </mat-form-field>
        
        <mat-form-field>
          <mat-label>Data</mat-label>
          <input matInput ngModel name="renewal" placeholder="Seleziona una data" required>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Prezzo</mat-label>
          <input matInput ngModel name="fee" placeholder="100.00" required>
        </mat-form-field>
  
        <mat-form-field>
          <mat-select ngModel name="pay" placeholder="Da pagare" required>
            <mat-option value="1">Si</mat-option>
            <mat-option value="0">No</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Note</mat-label>
          <textarea matInput ngModel name="note" placeholder="Inserisci una nota..."></textarea>
        </mat-form-field>
      </div>
      <mat-dialog-actions align="end">
        <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
        <button mat-button color="accent" [disabled]="f.invalid">Save Book</button>
      </mat-dialog-actions>
      
    </form>`,

  styles: [`
    .example-container {
      display: flex;
      flex-direction: column;
    }

    .example-container > * {
      width: 100%;
    }
  `]
})

export class DomainNewComponent implements OnInit {

  constructor(
    private actionsProviders: ProvidersService,
    private storeProviders: ProvidersStore,
    private dialogRef: MatDialogRef<DomainNewComponent>
  ){}

  ngOnInit(): void {
    this.actionsProviders.getAll();
  }

}
