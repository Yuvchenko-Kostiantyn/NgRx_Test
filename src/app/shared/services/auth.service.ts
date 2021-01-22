import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/storeMain';
import { logUserIn, getUserInfo} from '../../store/storeMain.actions'
import { IUserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<AppState>) { }

  logUserIn(data: IUserData){
    this.store.dispatch(logUserIn(data));
  }

  getUserData(){
    return this.store.select('userData');
  }
}
