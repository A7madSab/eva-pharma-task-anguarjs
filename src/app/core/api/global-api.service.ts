import { ApiService } from './api.service';

export class GlobalDAOService<T> {
  pageName: string = '';

  constructor(protected api: ApiService) {}

  get() {
    return this.api.getRequest<Object>(this.pageName);
  }
  getOne(id: string) {
    return this.api.getRequest<Object>(`${this.pageName}/${id}`);
  }
  post(data: any) {
    return this.api.postRequest<Object>(this.pageName, data);
  }
  update(data: any) {
    return this.api.putRequest<Object>(this.pageName, data);
  }
  delete(id: string) {
    return this.api.deleteRequest<Object>(`${this.pageName}/${id}`);
  }
}
