import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/storeMain';
import * as Actions from '../../store/storeMain.actions'
import { IUserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    { id: 1, username: 'Firstname_Lastname', password: '123456' },
    { id: 1, username: 'SomeUsername', password: '654321' }
  ]

  constructor(private store: Store<AppState>) { }

  loadAllUsers(): void{
    this.store.dispatch(Actions.loadAllUsers({users: this.users}))
  }

  logUserIn(data: IUserData): void{
    this.store.select('users').pipe(
      // I really don't like that construction, but i'm not sure how to do it better
      map(users => users.find(user => user.username === data.username && user.password === user.password))
    ).subscribe(user => {
      if(user){
        localStorage.setItem('user', JSON.stringify(user));
        this.store.dispatch(Actions.logUserIn(user));
      } else {
        throw new Error('No user with this set of keys found')
      }
    });
  }

  getUserData(): Observable<IUserData>{
    return this.store.select('userData');
  }

  getUsers(): Observable<IUserData[]>{
    return this.store.select('users')
  }
}
