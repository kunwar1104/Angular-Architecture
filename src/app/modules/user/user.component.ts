import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  name! : string 

  constructor( private userService : UserService) { }

  ngOnInit(): void {
    
   }
   user_Details() {
    this.userService.get_User_Profile().subscribe((res:any)=>{
         console.log(res)
         console.log(res.username)
        this.name =res.username 
    })
   }
}
