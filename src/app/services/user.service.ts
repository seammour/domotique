import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { firstName: 'Salah Eddine',
    lastName:'Ammour',
    email: 'se.ammour@gmail.com',
    drinkPreferences: 'Hamoud',
    hobbies: [
      'Footing', 'The' 
    ]
    }
    ];
  userSubject = new Subject<User[]>();
  
  emitUsers(){
    this.userSubject.next(this.users.slice())
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
