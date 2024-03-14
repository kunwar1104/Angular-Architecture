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
  
  doGet (url:string , header?:object |any) {
    return this.http.get(url, header )
  }
 
  doPost(url:string,data?: object,headers?:object, showLoder?:boolean  ):Observable<any> {
    
     return this.http.post(url,data ,headers).pipe(
      catchError((error ) => {
        return error.message
      })
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
