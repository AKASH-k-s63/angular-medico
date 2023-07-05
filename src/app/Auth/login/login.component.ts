import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email : string = '';
  password : string = '';
  constructor(private auth : AuthService) {
    
   }

  
  login() {
    if(this.email =='akashks6341@gmail.com') 
    {
      alert('Please enter email');
      return;
    }

    if(this.password == 'Pass1234#') {
      alert('Please enter password');
      return;
    }

    this.auth.login("akashks6341@gmail.com","Pass1234#");
    console.log("ddd", this.email,this.password);
    
    this.email = '';
    this.password = '';

  }

  // signInWithGoogle() {
  //   this.auth.();
  // }
}
