import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiHandlerService } from 'src/app/shared/services/api-handler/api-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private url : string = "http://localhost:3000"

  constructor( private apiHandler : ApiHandlerService, ) { }

  get_User_Profile() {
    console.log(localStorage.getItem('token'));

    let headers = {
        headers : {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
      }
      console.log(headers)
     return this.apiHandler.doGet(`${this.url}/get-profilnnbnbbne`,headers)
  }
}
