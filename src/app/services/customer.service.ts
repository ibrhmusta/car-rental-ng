import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:5001/api/customers/';

  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<CustomerResponseModel> {
    return this.httpClient
      .get<CustomerResponseModel>(this.apiUrl + 'getall');
  }
}
