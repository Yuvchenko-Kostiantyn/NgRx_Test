import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/storeMain';
import { ITask } from '../models/task';
import * as Actions from '../../store/storeMain.actions'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private store: Store<AppState>) { }

  addTask(data: ITask): void{
    this.store.dispatch(Actions.addTask(data));
  }

  getTasks(): Observable<ITask[]>{
    return this.store.select('tasks');
  }
}
