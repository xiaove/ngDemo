import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username:string, password:string) :boolean {
    let result = false;
    if("laowang" == username) {
      result = true;
    }
    return result;
  }
}
