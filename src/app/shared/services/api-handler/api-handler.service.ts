import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
   
  url : string = "";
  constructor( private http: HttpClient)  { }
  
  get (url:string) {
    return this.http.get(this.url)
  }
 
  post(data:string) {
     return this.http.post(this.url,data)
  }

  put(data:string) {
    return this.http.post(this.url,data)

  }

}
