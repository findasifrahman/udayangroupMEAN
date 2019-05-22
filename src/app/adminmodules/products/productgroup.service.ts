import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { routeurls } from '../routeurls/routeurls';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductgroupService {

  constructor(private http:HttpClient) { }

  Add(formval : any): Observable<any>{
    return this.http.post(routeurls.PRODUCT_GROUP_API_BASE_URL,formval)
  }
}
