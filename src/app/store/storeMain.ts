import {
    Action,
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createReducer,
    createSelector,
    MetaReducer,
    on,
    State,
    Store,
} from '@ngrx/store'
import { environment } from 'src/environments/environment'
import { ITask } from '../shared/models/task';
import { TasksActions } from '../shared/models/tasks-actions.enum';
import { UserActions } from '../shared/models/user-actions.enum';
import { IUserData } from '../shared/models/user-data';
import * as Actions from './storeMain.actions';

export interface AppState{
    userData: IUserData
    tasks: Array<ITask>,
    users: Array<IUserData>
}

export const initialState: AppState  = {
    userData: {
        id: null,
        username: '',
        password: ''
    },
    tasks: [
        { id: 1, title: 'Test title', description: 'Test dedcription', created_by: 1, assignee: 2},
        { id: 2, title: 'Test title 2', description: 'Test dedcription 2', created_by: 1, assignee: 2 }
    ],
    users: [
        { id: 1, username: 'Firstname_Lastname', password: '123456' },
        { id: 1, username: 'SomeUsername', password: '654321' }
    ],
}

function loginReducer(state: IUserData = initialState.userData, action): IUserData {
    switch(action.type){
        case UserActions.LOG_USER_IN: 
            localStorage.setItem('token', '12345');
            return {...state, username: action.username, password: action.password}
        default: 
            return state;
    }
}

function taskReducer(state: Array<ITask> = initialState.tasks, action){
    switch(action.type){
        case TasksActions.ADD_TASK:
            console.log(state)
            return [...state, action];
        default: 
            return state;
    }
}

function usersReducer(state: Array<IUserData>, action) {
    switch(action.type){
        case 'a':  
            return state;
        default: 
            return state
    }
}


export const reducers: ActionReducerMap<AppState> = {
    userData: loginReducer,
    tasks: taskReducer,
    users: usersReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];