import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LOGIN } from '../../models/auth-model';
import { Observable, catchError,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
   
  // private url : string = "http://localhost:3000";
  error = new Error();
  

  constructor( private http: HttpClient)  { }
  
  get (url:string) {
    return this.http.get(url)
  }
 
  doPost(url?:any,data?:any,headers?:any):Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'accept': 'application/json'
    // });
     return this.http.post(url,data ,headers).pipe(
      // catchError(this.error),
     
     )
  }

  put(url:string ,data:string) {
    return this.http.post(url,data)

  }
  
  private handelError(error: HttpErrorResponse): Observable<never> {
    
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Client side error
       errorMessage = `Error: ${error.error.message}`
    } else {
      // Server side error 
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message} `;
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }

}
