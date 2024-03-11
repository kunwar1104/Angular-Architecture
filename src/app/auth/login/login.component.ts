import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm! : FormGroup<any> ;
  passord_pattern = /^[a-zA-Z0-9]{8}$/;
  sending: boolean = false;
  apiRes? : any = {}


  constructor (private router: Router,
               private authService:AuthService,
               private loader : LoaderService,
               private ns : NotificationService
               ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl ("", [Validators.required]),
      password : new FormControl("", [Validators.required] )
    }) 
  }

  submit(){
    this.loader.show();
   if(this.loginForm.value){
    this.loader.show();
  
   }
    setTimeout(() => {
    this.loader.show();

      console.log(this.loginForm.value)
     //  let data = this.loginForm.value;
      if (this.loginForm.valid) {
        this.authService.login(this.loginForm.value).subscribe((res:any)  =>{
          console.log(res)
           this.apiRes = res
           setTimeout(() => {
            this.loader.hide();
           this.ns.showNotification(" alert alert-success", "Login Successfully")

            this.router.navigate(["/dashboard"])

           },1000)
         
        })
        if(this.apiRes.token){
           localStorage.setItem("token",this.apiRes.token);
          //  this.router.navigate(["/dashboard"])
        }
      }
    },2000);

    this.loader.hide();
  }

  forget_Pass(){
    this.router.navigate(["/for-pass"])
  }
}
