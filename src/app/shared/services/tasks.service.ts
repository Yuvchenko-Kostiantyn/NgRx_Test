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

  private tasks = [       
    { id: 1, title: 'Test title', description: 'Test dedcription', created_by: 1, assignee: 2},
    { id: 2, title: 'Test title 2', description: 'Test dedcription 2', created_by: 1, assignee: 2 }
  ]

  constructor(private store: Store<AppState>) { }

  loadAllTasks(){
    this.store.dispatch(Actions.loadAlltasks({tasks: this.tasks}))
  }

  addTask(data: ITask): void{
    this.store.dispatch(Actions.addTask(data));
  }

  getTasks(): Observable<ITask[]>{
    return this.store.select('tasks');
  }
}
