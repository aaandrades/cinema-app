import { Action, createReducer, on } from '@ngrx/store';
import * as loginActions from "../actions/user.actions";
import { initialUserState, UserState } from '../model/user.state';


const multipleUserReducer = createReducer(
  initialUserState,
  on(loginActions.loginUserAction, (state: UserState) => ({
    ...state,
    loading: true
  })),
  on(loginActions.loginUserSuccessAction, (state: UserState, { response }) => ({
    ...state,
    name: response.user.name,
    email: response.user.email,
    token: response.token,
    role: response.user.role,
    token_api: response.tokenApi,
    loading: false,
  })),
);

export const userReducer = (state: UserState, action: Action): UserState => {
  return multipleUserReducer(state, action);
};
