import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DomainsService} from '../services/domains.service';
import { DomainsStore } from '../services/domains.store';

@Component({
  selector: 'app-domain-edit',
  template: `
    <h3>Modifica dominio</h3>
    <div class="example-container">
      <mat-form-field>
        <input matInput placeholder="Input">
      </mat-form-field>

      <mat-form-field>
        <textarea matInput placeholder="Textarea"></textarea>
      </mat-form-field>

      <mat-form-field>
        <mat-select placeholder="Select">
          <mat-option value="option">Option</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
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
    private store: DomainsStore,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.actions.getDomain( params['id'] );
    });

    console.log(this.store);
  }


}
