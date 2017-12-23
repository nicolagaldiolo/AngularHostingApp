import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProvidersService } from '../services/providers.service';
import { ProvidersStore } from '../services/providers.store';

import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-provider-edit',
  template: `
    <h3>Modifica Fornitore</h3>

    <form novalidate #f="ngForm" (ngSubmit)="saveHandler(f)">
      <div class="example-container">

        <mat-form-field>
          <mat-label>Fornitore</mat-label>
          <input matInput [ngModel]="store.active?.name" name="name" placeholder="Fornitore" required>
        </mat-form-field>

        <mat-form-field>
          <mat-label>WebSite</mat-label>
          <input matInput [ngModel]="store.active?.website" name="website" placeholder="Url" required>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Label</mat-label>
          <input matInput [ngModel]="store.active?.label" name="label" placeholder="Colore" required>
        </mat-form-field>
      
      </div>
      <a mat-fab routerLink="/providers">
        <mat-icon aria-label="Example icon-button with a heart icon">arrow_back</mat-icon>
      </a>
      <button mat-raised-button [disabled]="f.invalid">Modifica Fornitore</button>
      
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

export class ProviderEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,

    private actions: ProvidersService,
    private store: ProvidersStore,

    private snack: MatSnackBar,

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.actions.getProvider( params['id'] );
    });

    setTimeout(()=>{
      console.log(this.store);
    },4000)
  }

  saveHandler(form: NgForm){

    console.log(form);
    /*const domain = this.storeProviders.providers.filter( i => i.id === form.value.domain);
    const hosting = this.storeProviders.providers.filter( i => i.id === form.value.hosting);

    form.value.domain = domain[0];
    form.value.hosting = hosting[0];

    this.actions.save(form.value).then( () => {
      this.router.navigate(['/domains']);
      this.openSnackBar('Elemento modificato correttamente' );
    });*/
  }


  openSnackBar(message: string, action: string = 'CLOSE', duration: number = 1500) {
    this.snack.open(message, action, {
      duration: duration
    });
  }

}
