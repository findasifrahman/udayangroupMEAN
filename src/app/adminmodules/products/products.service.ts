import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { routeurls } from '../routeurls/routeurls';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }

  Add(formval : any): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
      let options = { headers: headers };
    //let header = headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    return this.http.post(routeurls.BASE_API_URL + routeurls.PRODUCT_API_BASE_URL,formval,options)
  }
  getAll(): Observable<any> {
    return this.http.get<any>(routeurls.BASE_API_URL + routeurls.PRODUCT_API_BASE_URL);//.pipe(map(response => response as productmodels));//.subscribe(result => {console.log(result);});
  }
  getbygroup(gr:any): Observable<any> {
    return this.http.get<any>(routeurls.BASE_API_URL + routeurls.PRODUCT_API_BASE_URL + "/getbygroup", { params: new HttpParams().set('group', gr) });//.pipe(map(response => response as productmodels));//.subscribe(result => {console.log(result);});
  }
  getbyid(id: any): Observable<any> {
    return this.http.get<any>(routeurls.BASE_API_URL + routeurls.PRODUCT_API_BASE_URL+ "/getbyid", { params: new HttpParams().set('id', id) });
  }
  update(id: any, obj: any): Observable<any> {
    obj.Id = id;
    console.log(obj);
    return this.http.put<any>(routeurls.BASE_API_URL + routeurls.PRODUCT_API_BASE_URL , obj);
  }
  delete(id: any): Observable<any> {
    return this.http.delete<any>(routeurls.BASE_API_URL + routeurls.PRODUCT_API_BASE_URL, { params: new HttpParams().set('id', id) });
  }
}
