import { createAction, props } from '@ngrx/store';
import { ngrxType } from 'src/app/services/helpers/ngrx-utils';
import { credentials, registerCredentials } from '../../models/interface';
import { LoginResponse, RegisterResponse } from '../model/user.state';
import {
  EnableLoadingObserverActionsTypes,
  DisableLoadingObserverActionsTypes,
} from './loader.actions';
import { AlertsMessagesTypeInterface } from '../../enums/AlertMessageTypes';
import { ModalObserverActionsTypes } from './modal.actions';

// LOGIN ACTIONS
export const loginUserAction = createAction(
  ngrxType('[Login/UI] Login user action'),
  props<credentials>()
);
export const loginUserSuccessAction = createAction(
  ngrxType('[Login/UI] Login User Success action'),
  props<LoginResponse>()
);
export const loginUserErrorAction = createAction(
  ngrxType('[Login/UI] Login User Error action'),
  props<{ message: AlertsMessagesTypeInterface }>()
);

// REGISTER ACTIONS
export const registerUserAction = createAction(
  ngrxType('[Register/UI] Register user action'),
  props<registerCredentials>()
);
export const registerUserSuccessAction = createAction(
  ngrxType('[Register/UI] Register User Success action'),
  props<RegisterResponse>()
);
export const registerUserErrorAction = createAction(
  ngrxType('[Register/UI] Register User Error action')
);

// PUBLIC ACCESS
export const publicUserAccessAction = createAction(
  ngrxType('[login/UI] Set public user action')
);

// UPDATE INFORMATION
export const updateInformationAction = createAction(
  ngrxType('[login/UI] Update information action'),
  props<{ request: any; id: string }>()
);
export const updateInformationSuccessAction = createAction(
  ngrxType('[login/UI] Update information success action'),
  props<{ response: any; message: AlertsMessagesTypeInterface }>()
);
export const updateInformationErrorAction = createAction(
  ngrxType('[login/UI] Update information error action'),
  props<{ message: AlertsMessagesTypeInterface }>()
);

// Logout
export const logoutAction = createAction(
  ngrxType('[login/UI] Logout user action')
);

export const logoutSuccessAction = createAction(
  ngrxType('[login/UI] Logout user success action')
);

EnableLoadingObserverActionsTypes.push(loginUserAction);
EnableLoadingObserverActionsTypes.push(registerUserAction);
EnableLoadingObserverActionsTypes.push(updateInformationAction);

DisableLoadingObserverActionsTypes.push(loginUserErrorAction);
DisableLoadingObserverActionsTypes.push(registerUserSuccessAction);
DisableLoadingObserverActionsTypes.push(registerUserErrorAction);

DisableLoadingObserverActionsTypes.push(updateInformationSuccessAction);
DisableLoadingObserverActionsTypes.push(updateInformationErrorAction);

ModalObserverActionsTypes.push(loginUserErrorAction);
ModalObserverActionsTypes.push(updateInformationSuccessAction);
