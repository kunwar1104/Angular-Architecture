import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
 
  $notification = this.notificationService.notifications$ ;
  type!:string | any;
  message!:string | any;
  icon:boolean |any;
  time?:string; 
  isHideMessage? : boolean = true;

  constructor(  private notificationService: NotificationService ) {

    this.notificationService.showNotification(this.type, this.message, this.icon);

    // if(this.message === this.message ) {
    //   setTimeout(() => {
    //     console.log("isHideMessage Called")
    //     console.log(this.isHideMessage )
    //        this.isHideMessage = false
    //        console.log(this.isHideMessage)
    //   }, 5000);
    // }
   
  }
  
 
  // closeNotification(){
  //   document.querySelector("button.btn-close")
  //   console.log("close clicked")
  // }

}
