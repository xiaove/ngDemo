import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!
    </p>
    <div>
      username: <input #usernameRef type='text'>
      password: <input #passwordRef type='password'>
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(@Inject('auth') private authService) { }

  ngOnInit() {
  }

  onClick(username, pwd) {
    console.log("The auth result is:" + this.authService.loginWithCredentials(username, pwd));
  }
}
