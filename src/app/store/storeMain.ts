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
} from '@ngrx/store'
import { environment } from 'src/environments/environment'
import { UserActions } from '../shared/models/user-actions.enum';
import { IUserData } from '../shared/models/user-data';
import * as Actions from './storeMain.actions';

export interface AppState{
    userData: IUserData
    tasks: Array<any>,
    users: Array<any>
}

export const initialState: AppState  = {
    userData: {
        email: '',
        password: ''
    },
    tasks: [],
    users: [],
}

function loginReducer(state: IUserData, action): IUserData {
    switch(action.type){
        case UserActions.LOG_USER_IN: 
            localStorage.setItem('token', '12345');
            return {...state, email: action.email, password: action.password}
        default: 
            return state;
    }
}

function taskReducer(state, action){
    switch(action.type){
        case 'a':
            return state;
        default: 
            return state;
    }
}

function usersReducer(state, action) {
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