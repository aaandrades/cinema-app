import { Action, createReducer, on } from '@ngrx/store';
import * as loginActions from '../actions/user.actions';
import { initialUserState, UserState } from '../model/user.state';

const multipleUserReducer = createReducer(
  initialUserState,
  on(loginActions.loginUserAction, (state: UserState) => ({
    ...state,
    loading: true,
  })),
  on(loginActions.loginUserSuccessAction, (state: UserState, { response }) => ({
    ...state,
    name: response.user.name,
    email: response.user.email,
    token: response.token,
    role: response.user.role,
    token_api: response.tokenApi,
    id: response.user._id,
    loading: false,
  })),
  on(
    loginActions.updateInformationSuccessAction,
    (state: UserState, { response }) => ({
      ...state,
      name: response.user.name,
      email: response.user.email,
      role: response.user.role,
      id: response.user._id,
      loading: false,
    })
  ),
  on(loginActions.publicUserAccessAction, (state: UserState) => ({
    ...state,
    publicUser: true,
  })),
  on(loginActions.logoutAction, (state: UserState) => initialUserState)
);

export const userReducer = (state: UserState, action: Action): UserState => {
  return multipleUserReducer(state, action);
};
