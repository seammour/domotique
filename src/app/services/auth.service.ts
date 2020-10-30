import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  singnIn(){
    return new Promise(
      (resolve, reject) =>{
        setTimeout(
          () => {
            this.isAuth =true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut(){
    this.isAuth=false;
  }
}
