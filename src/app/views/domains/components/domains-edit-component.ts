import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DomainsService} from '../services/domains.service';
import { DomainsStore } from '../services/domains.store';
import {NgForm} from '@angular/forms';
import { ProvidersService } from '../../providers/services/providers.service';
import { ProvidersStore } from '../../providers/services/providers.store';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-domain-edit',
  template: `
    <h3>Modifica dominio</h3>
    <form novalidate #f="ngForm" (ngSubmit)="saveHandler(f)">
      <div class="example-container">
        <mat-form-field>
          <mat-label>Url</mat-label>
          <input matInput [ngModel]="store.active?.url" name="url" placeholder="www.website.com" required>
        </mat-form-field>

        <mat-form-field>
          <mat-select placeholder="Dominio" name="domain">
            <mat-option *ngFor="let provider of this.storeProviders.providers" [value]="provider">{{provider.name}}</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-select placeholder="Hosting" name="hosting">
            <mat-option value="1">Ovh</mat-option>
            <mat-option value="0">Aruba</mat-option>
          </mat-select>
        </mat-form-field>
        
        <mat-form-field>
          <mat-label>Data</mat-label>
          <input matInput [ngModel]="store.active?.renewal" name="renewal" placeholder="Seleziona una data" required>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Prezzo</mat-label>
          <input matInput [ngModel]="store.active?.fee" name="fee" placeholder="100.00" required>
        </mat-form-field>
  
        <mat-form-field>
          <mat-select placeholder="Da pagare">
            <mat-option value="1">Si</mat-option>
            <mat-option value="0">No</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Note</mat-label>
          <textarea matInput [ngModel]="store.active?.note" name="note" placeholder="Inserisci una nota..."></textarea>
        </mat-form-field>
        
      </div>

      <button md-button>Cancel</button>
      <button md-button type="submit" [disabled]="f.invalid">Modifica dominio</button>

    </form>
    
  `,
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

export class DomainEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private actions: DomainsService,
    private actionsProviders: ProvidersService,
    private store: DomainsStore,
    private storeProviders: ProvidersStore
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.actions.getDomain( params['id'] );
    });

    this.actionsProviders.getAll().then( ()=> {
      console.log(this.storeProviders.providers);
    });

  }

  saveHandler(form: NgForm){
    console.log(form.value);
  }




}
