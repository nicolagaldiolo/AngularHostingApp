import { Injectable } from '@angular/core';
import { Domain } from '../model/domain';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { DomainsStore } from './domains.store';

const INITIAL_STATE = {};

@Injectable()
export class DomainsService {

  constructor( private http: HttpClient, private store: DomainsStore ) {
    this.reset();
  }

  /**
   * get all Providers
   */
  getAll() {
    const promise = new Promise( (resolve, reject) => {
      this.http.get<Domain[]>(`${env.baseUrl}/domains`)
        .subscribe(result => {
          this.store.domains = result;
          resolve();
        });
    })
    return promise;
  }

  getDomain(id: Number) {
    this.http.get<Domain>(`${env.baseUrl}/domains/${id}`)
      .subscribe(result => this.store.active = result);
  }


  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      return this.edit(value as Domain);
    } else {
      return this.add(value as Domain);
    }
  }
  /**
   * Add element
   * @param {Domain} Domain
   */
  add(domain: Domain) {
    const promise = new Promise( (resolve, reject) =>{
      this.http.post(`${env.baseUrl}/domains`, domain)
        .subscribe(res => {
          this.store.domains.push(res as Domain);
          this.reset();
          resolve();
        });
    })
    return promise;
  }
  /**
   * Edit active element
   * @param {Domain} Domain
   */
  edit(domain: Domain) {
    const promise = new Promise( (resolve, reject) => {

      const newDomain = Object.assign(
        {}, this.store.active, domain
      );

      this.http.patch(`${env.baseUrl}/domains/${newDomain.id}`, newDomain)
        .subscribe(
          res => {
            //const index = this.store.active.id;
            //this.store.domains[index] = newDomain;
            this.reset();
            resolve();
          }
        );
    })
    return promise;
  }
  /**
   * delete element
   * @param {Provider} Provider
   */
  delete(domain: Domain) {
    const promise = new Promise( (resolve, reject) => {
      this.http.delete(`${env.baseUrl}/domains/${domain.id}`)
        .subscribe(() => {
            const index = this.store.domains.indexOf(domain);
            this.store.domains.splice(index, 1);
            this.reset();
            resolve();
          }
        );
    });
    return promise;
  }
//
  ///**
  // * Set Active Element
  // * @param {Provider} Provider
  // */
  //setActiveHandler(provider: Provider) {
  //  this.store.active = Object.assign({}, provider);
  //}

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
