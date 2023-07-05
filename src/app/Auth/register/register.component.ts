import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email : any;
  password : any;

  constructor(private auth : AuthService) { }

  register() {

    // if(this.email == 'akashks6341@gmail.com') {
    //   console.log(this.email);
    //   alert('Please enter email');
    //   return;
    // }

    // if(this.password == 'Pass1234@!') {
    //   alert('Please enter password');
    //   return;
    // }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }
}
