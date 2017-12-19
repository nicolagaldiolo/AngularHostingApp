import {Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog, MatSnackBar} from '@angular/material';
import { ProvidersService } from '../services/providers.service';
import { ProvidersStore } from '../services/providers.store';
import { Provider } from '../model/provider';
import { ProviderEditComponent } from './provider-edit-component';

@Component({
  selector: 'app-providers-view-component',
  styleUrls: ['providers-view.component.scss'],
  templateUrl: 'providers-view.component.html',
})

export class ProvidersViewComponent implements AfterViewInit {

  displayedColumns = ['id', 'fornitore', 'url', 'color', 'action'];
  dataSource: MatTableDataSource<Provider>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private store: ProvidersStore,
    private actions: ProvidersService,
    private snack: MatSnackBar ){}


  ngAfterViewInit() {
    this.actions.getAll().then( ()=> {
      this.dataSource = new MatTableDataSource(this.store.providers);
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
    this.dialog.open(ProviderEditComponent, { maxWidth: '400px' } )
      .afterClosed().subscribe( (result: NgForm) => {
        this.actions.save(result.value).then( () => {
          this.updateData();
          this.openSnackBar('Elemento Aggiunto' );
        });

      });
  }

  deleteProvider(provider: Provider, evt: MouseEvent){
    evt.preventDefault();
    this.actions.delete(provider).then( () => {
      this.updateData();
      this.openSnackBar('Elemento eliminato' );
    });
  }

  updateData(): void {
    this.dataSource.data = this.store.providers;
  }

  openSnackBar(message: string, action: string = 'CLOSE', duration: number = 2500) {
    this.snack.open(message, action, {
      duration: duration
    });
  }



}
