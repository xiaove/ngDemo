import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-login",
  template: `
    <p>
      login Works!
    </p>
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          username: <input type="text" name="usernameInput" required minlength="3" [(ngModel)]="username" #usernameRef="ngModel">
          {{usernameRef.errors | json }}
          <div *ngIf="usernameRef.errors?.required">this is required </div> 
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
          <br>

          password: <input type="password" name="passwordInput" required minlength="3" [(ngModel)]="password" #passwordRef="ngModel">
          {{passwordRef.errors | json }}
          <div *ngIf="passwordRef.errors?.required">this is required</div>
          <div *ngIf="passwordRef.errors?.minlength">should be at least 3 charactors</div>
          <br>

          <button type="submit">Login</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: [`
    input.ng-invalid{border:3px solid red;}
    input.ng-valid{border:3px solid green;}
  `]
})
export class LoginComponent implements OnInit {
  // 定义成员变量
  username = "";
  password = "";
  constructor(@Inject("auth") private authService) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log("The auth result is:" + 
    this.authService.loginWithCredentials(formValue.login.usernameInput, formValue.login.passwordInput));
  }
}
