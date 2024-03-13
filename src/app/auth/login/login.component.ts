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
  sending: boolean = false;
  apiRes? : any = {};
  icon:boolean|any;
  // email_pattern = /^([a-zA-Z0-9][a-zA-Z0-9\-_]*|\.[a-zA-Z0-9\-_]+)$/;
  passord_pattern = /^[a-zA-Z0-9@\$]{9}$/;
  email_pattern = /^(?![0-9]+$)[a-zA-Z0-9]+$/;

  constructor (
               private router: Router,
               private authService:AuthService,
               private loader : LoaderService,
               private ns : NotificationService
               ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl ("", [Validators.required, Validators.pattern(this.email_pattern)]),
      password : new FormControl("", [Validators.required,Validators.pattern(this.passord_pattern)] )
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
           this.ns.showNotification(" alert alert-success", "Login Successfully",true)
       
           if(this.apiRes.token){
            localStorage.setItem("token",this.apiRes.token);
            console.log(localStorage.setItem("token",this.apiRes.token))
           //  this.router.navigate(["/dashboard"])
            }
            else{
              this.ns.showNotification(" alert alert-danger"," Username or Password is worng !",false)
            }
            this.router.navigate(["/dashboard"])

           },1000)
         
        })
       
      }
      
    },2000);

    this.loader.hide();
  }

  forget_Pass(){
    this.router.navigate(["/for-pass"])
  }
}
