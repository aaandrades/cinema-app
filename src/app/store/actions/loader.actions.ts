import { createAction } from '@ngrx/store';
import { ngrxType } from 'src/app/services/helpers/ngrx-utils';

export const enableLoadingAction = createAction(ngrxType('[Global/UI] Enable Loading'));

export const disableLoadingAction = createAction(ngrxType('[Global/UI] Disable Loading'));

export const EnableLoadingObserverActionsTypes: any = [];

export const DisableLoadingObserverActionsTypes: any = [];
