import {Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSnackBar} from '@angular/material';
import { DomainsService } from '../services/domains.service';
import { DomainsStore } from '../services/domains.store';
import { Domain } from '../model/domain';
import { DomainEditComponent } from './domains-edit-component';

@Component({
  selector: 'app-domains-view-component',
  styleUrls: ['domains-view.component.scss'],
  templateUrl: 'domains-view.component.html',
})

export class DomainsViewComponent implements AfterViewInit {

  displayedColumns = ['id', 'sito', 'dominio', 'hosting', 'data_rinnovo', 'prezzo', 'note', 'pagato', 'action'];
  dataSource: MatTableDataSource<Domain>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private store: DomainsStore,
    private actions: DomainsService,
    private snack: MatSnackBar ){}


  ngAfterViewInit() {
    this.actions.getAll().then( ()=> {
      this.dataSource = new MatTableDataSource(this.store.domains);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    this.dialog.open(DomainEditComponent, { maxWidth: '400px' } )
      .afterClosed().subscribe( (result: NgForm) => {
        this.actions.save(result.value).then( () => {
          this.updateData();
          this.openSnackBar('Elemento Aggiunto' );
        });

      });
  }

  deleteDomain(domain: Domain, evt: MouseEvent){
    evt.preventDefault();
    this.actions.delete(domain).then( () => {
      this.updateData();
      this.openSnackBar('Elemento eliminato' );
    });
  }

  updateData(): void {
    this.dataSource.data = this.store.domains;
  }

  openSnackBar(message: string, action: string = 'CLOSE', duration: number = 2500) {
    this.snack.open(message, action, {
      duration: duration
    });
  }


}
