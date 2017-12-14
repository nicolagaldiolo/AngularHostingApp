import {Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { ProvidersService } from '../services/providers.service';
import { ProvidersStore } from '../services/providers.store';
import { Provider } from '../model/provider';

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

  constructor( private store: ProvidersStore, private actions: ProvidersService){}

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.actions.getAll().subscribe(result => {

      this.store.providers = result;

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

}
