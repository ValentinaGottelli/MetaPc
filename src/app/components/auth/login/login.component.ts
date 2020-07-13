import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authSvc: AuthService, private route: Router) {}
 
  hide = true;
 
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

 /* getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.password.hasError('required')){
      return 'Debes ingresar una contraseña';
    }
    if(this.password.hasError('minLength')){
      return  'Necesitas poner mas de 4 caracteres';
    }
    
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
*/
  ngOnInit() {}

  onLogin(form: UserI) {
    
    this.authSvc
      .loginByEmail(form)
      .then(res => {
        console.log('Successfully', res);
        this.route.navigate(['/']);
      })
      .catch(err => console.log('Error', err));
  }
}
