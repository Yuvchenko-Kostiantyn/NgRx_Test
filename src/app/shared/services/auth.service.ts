import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    this.store.dispatch(Actions.logUserIn(data));
  }

  getUserData(): Observable<IUserData>{
    return this.store.select('userData');
  }

  getUsers(): Observable<IUserData[]>{
    return this.store.select('users')
  }
}
