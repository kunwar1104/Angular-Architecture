import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
                private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl ("", [Validators.required]),
      password : new FormControl("", [Validators.required] )
    }) 
  }

  submit(){
   console.log(this.loginForm.value)
  //  let data = this.loginForm.value;
   if (this.loginForm.valid) {
     this.authService.login(this.loginForm.value).subscribe((res:any)  =>{
       console.log(res)
        this.apiRes = res
     })
     if(this.apiRes.token){
        localStorage.setItem("token",this.apiRes.token)
     }
   }

  }

  forget_Pass(){
    this.router.navigate(["/for-pass"])
  }
}
