import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../shared/services/api-handler/api-handler.service';
import { LOGIN } from '../shared/models/auth-model';
import { Observable, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url :string = "http://localhost:3000";
  private url_Login: string = "http://localhost:3000/login";
  
  constructor( private apiHandler: ApiHandlerService) { }

  login(data:LOGIN,): Observable<LOGIN>  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json'
    });
    return this.apiHandler.doPost(this.url_Login,data,{headers}, true )// here true is for loader
    // .pipe(                                                           // variar
    // tap(res => {
    //     console.log("res =",res)
    // })
    // );
  }
}
