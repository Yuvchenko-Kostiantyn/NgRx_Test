import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './shared/services/auth.service';
import { AppState } from './store/storeMain';
import * as Actions from './store/storeMain.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jira-clone';

  constructor(private authService: AuthService, private store: Store<AppState>){}

  ngOnInit(){
    this.authService.loadAllUsers();
    const user = localStorage.getItem('user');
    if(user){
      this.store.dispatch(Actions.logUserIn(JSON.parse(user)))
    }
  }
}
