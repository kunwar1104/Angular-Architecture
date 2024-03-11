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
  time?:string; 
  
  constructor(  private notificationService: NotificationService ) {
    
    this.notificationService.showNotification(this.type,this.message)
  }
  
  // ngOnInit(): void {
  //   this.notificationService.showNotification(this.type,this.message  )
    
  // };

  closeNotification(){
    document.querySelector("button.btn-close")
    console.log("close clicked")
  }
//   this.notificationService.showNotification('success', 'Operation completed successfully!');
// // Or:
// this.notificationService.showNotification('failure', 'An error occurred:', '11 mins ago');  

  // show_Success_Notification() {
  //   // Get the notification element
  //   const notificationElement :any = document.querySelector('.toast .alert-success');

  //   // Show the notification
  //   notificationElement.classList.add('show');
  // };

  // show_Failure_Notification() {
  //   const notificationElement :any = document.querySelector('.toast .alert-danger');

  //   notificationElement.classList.add('show');
     
  // }
}
