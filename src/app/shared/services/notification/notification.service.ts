import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  isHideMessage : boolean = true ;

  public notifications = new Subject<{ icon: any; type: string, message: string  }>();

  public notifications$ = this.notifications.asObservable();

  type!:string;
  message!:string;
  timeOut!:number | string;
  icon:boolean|any;

  constructor( ) {

    // setTimeout(() => {
    //   this.isHideMessage = false ;
    // }, 3000);
  }
  // ngOnInit(): void {
  //   this.showNotification(this.type,this.message, this.icon)
    
  // }
  showNotification(type: string, message: string, icon:boolean ) {
    this.notifications.next({ type, message, icon });

  }


}
