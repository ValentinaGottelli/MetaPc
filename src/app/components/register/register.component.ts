import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {
  
  RegisterForm= new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password :new FormControl(''),
  })
  hide = true;
  


  constructor(private router:Router,private storage: AngularFireStorage,private authSvc:AuthService) { 
  }
 


  ngOnInit(): void {
  }

 async onRegister(){
    const {email,password}= this.RegisterForm.value;
    try{
      
     const user = await this.authSvc.register(email,password);
     if(user){
       this.router.navigate(['/home']);
     }
    }

    catch(error){console.log(error)}
    
    
  }

}
