import { createAction, props } from '@ngrx/store'
import { IUserData } from '../shared/models/user-data'
import { UserActions } from '../shared/models/user-actions.enum'

export const logUserIn = createAction(
    UserActions.LOG_USER_IN,
    props<IUserData>()
)

export const getUserInfo = createAction(
    UserActions.GET_USER_DATA
)

export const loadUserFailure = createAction(
    UserActions.USER_ERROR,
    props<{error: any}>()
)