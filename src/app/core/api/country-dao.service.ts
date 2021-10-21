import { ApiService } from './api.service';
import { GlobalDAOService } from './global-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryDAOService extends GlobalDAOService<any> {
  pageName = 'country';
  constructor(api: ApiService) {
    super(api);
  }
}
