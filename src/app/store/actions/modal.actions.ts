import { createAction, props } from '@ngrx/store';
import { ngrxType } from 'src/app/services/helpers/ngrx-utils';
import { AlertsMessagesTypeInterface } from '../../enums/AlertMessageTypes';

export const modalAction = createAction(
  ngrxType('[Global/UI] Show modal'),
  props<{ message?: AlertsMessagesTypeInterface }>()
);

export const ModalObserverActionsTypes: any = [];
