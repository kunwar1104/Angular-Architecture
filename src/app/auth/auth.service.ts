import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../shared/services/api-handler/api-handler.service';
import { LOGIN } from '../shared/models/auth-model';
import { Observable, tap, throwError, catchError, map } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url :string = "http://localhost:3000";
  private url_Login: string = "http://localhost:3000/login";
  
  constructor( private apiHandler: ApiHandlerService) { }

  login(data:LOGIN,): Observable<any>  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
    });
    return this.apiHandler.doPost(this.url_Login,data,{headers}, true )// here true is for loader
    // .pipe(map ((res:any) => {
    //     console.log(res)
    //     this.handelError(res)
    // })                                                  
    //   //  catchError(this.handelError)
    // );
  };

  // private handelError(error: HttpErrorResponse): Observable<any> {
    
  //   let errorMessage = '';
  //   if(error.error instanceof ErrorEvent) {
  //     // Client side error
  //      errorMessage = `Error: ${error.error.message}`
  //   } else {
  //     // Server side error 
  //     errorMessage = `Error Code: ${error.status}\n Message: ${error.message} `;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage)
  // }
}
