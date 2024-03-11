import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public notifications = new Subject<{ type: string, message: string,  }>();

  public notifications$ = this.notifications.asObservable();

  type!:string;
  message!:string;
  timeOut!:number | string;
  constructor( ) {
    // setTimeout(() => {
    //   this.showNotification(this.type,this.message)
    // }, 3000);
  }
  ngOnInit(): void {
    this.showNotification(this.type,this.message)
    
  }
  showNotification(type: string, message: string,) {
    this.notifications.next({ type, message });
  }


}
