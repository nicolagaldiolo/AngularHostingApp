import { Injectable } from '@angular/core';
import { Provider } from '../model/provider';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { ProvidersStore } from './providers.store';

const INITIAL_STATE = {};

@Injectable()
export class ProvidersService {

  constructor( private http: HttpClient, private store: ProvidersStore ) {
    this.reset();
  }

  /**
   * get all Providers
   */
  getAll() {
    const promise = new Promise( (resolve, reject) => {
      this.http.get<Provider[]>(`${env.baseUrl}/providers`)
        .subscribe(result => {
          this.store.providers = result;
          resolve();
        });
    })
    return promise;
  }

  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      this.edit(value as Provider);
    } else {
      return this.add(value as Provider);
    }
  }

  /**
   * Add element
   * @param {Provider} Provider
   */
  add(provider: Provider) {
    const promise = new Promise( (resolve, reject) =>{
      this.http.post(`${env.baseUrl}/providers`, provider)
        .subscribe(res => {
          this.store.providers.push(res as Provider);
          this.reset();
          resolve();
        });
    })
    return promise;
  }

  /**
   * Edit active element
   * @param {Provider} Provider
   */
  edit(provider: Provider) {
    const newProvider = Object.assign(
      {}, this.store.active, provider
    );

    this.http.patch(`${env.baseUrl}/providers/${newProvider.id}`, newProvider )
      .subscribe(
        res => {
          const index = this.store.providers.findIndex(d => {
            return d.id === newProvider.id;
          });
          this.store.providers[index] = newProvider;
          this.reset();
        }
      );
  }

  /**
   * delete element
   * @param {Provider} Provider
   */
  delete(provider: Provider) {
    const promise = new Promise( (resolve, reject) => {
      this.http.delete(`${env.baseUrl}/providers/${provider.id}`)
        .subscribe(() => {
            const index = this.store.providers.indexOf(provider);
            this.store.providers.splice(index, 1);
            this.reset();
            resolve();
          }
        );
    });
    return promise;
  }

  /**
   * Set Active Element
   * @param {Provider} Provider
   */
  setActiveHandler(provider: Provider) {
    this.store.active = Object.assign({}, provider);
  }

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
