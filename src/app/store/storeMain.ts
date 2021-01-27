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
    tasks: [],
    users: [],
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
        case TasksActions.LOAD_ALL_TASKS: 
            return [...state, ...action.tasks];

        case TasksActions.ADD_TASK:
            return [...state, action];
            
        default: 
            return state;
    }
}

function usersReducer(state: Array<IUserData> = initialState.users, action) {
    switch(action.type){
        case UserActions.LOAD_ALL_USERS:  
            console.log(action)
            return [...state, ...action.users];
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