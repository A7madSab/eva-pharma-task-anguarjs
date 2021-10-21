import { ApiService } from './api.service';
import { GlobalDAOService } from './global-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityDAOService extends GlobalDAOService<any> {
  pageName = 'city';
  constructor(api: ApiService, private http: HttpClient) {
    super(api);
  }
  getCityOfCountries(countryId: string) {
    return this.api.getRequest<Object>(
      `${this.pageName}/getcities/${countryId}`
    );
  }
}
