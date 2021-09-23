import { createAction, props } from '@ngrx/store';
import { ngrxType } from 'src/app/services/helpers/ngrx-utils';
import { ModalObserverActionsTypes } from './modal.actions';
import {
  AlertsMessagesType,
  AlertsMessagesTypeInterface,
} from '../../enums/AlertMessageTypes';
import {
  EnableLoadingObserverActionsTypes,
  DisableLoadingObserverActionsTypes,
} from './loader.actions';

export const fetchMoviesAction = createAction(
  ngrxType('[Movies/UI] Fetch movies Action'),
  props<{ results: any }>()
);

export const fetchMoviesSuccessAction = createAction(
  ngrxType('[Movies/UI] Success fetch movies action'),
  props<any>()
);
export const fetchMoviesErrorAction = createAction(
  ngrxType('[Movies/UI] Error fetching movies action'),
  props<{ message: AlertsMessagesTypeInterface }>()
);

export const fetchMovieById = createAction(
  ngrxType('[Movies/UI] Fetch movie by id Action'),
  props<{ id: string }>()
);

export const fetchMovieByIdSuccessAction = createAction(
  ngrxType('[Movies/UI] Success fetching movie by id action'),
  props<{ currentMovie: any }>()
);
export const fetchMovieByIdErrorAction = createAction(
  ngrxType('[Movies/UI] Error fetching movie by Id action'),
  props<{ message: AlertsMessagesTypeInterface }>()
);

EnableLoadingObserverActionsTypes.push(fetchMovieById);
// EnableLoadingObserverActionsTypes.push(registerUserAction);

DisableLoadingObserverActionsTypes.push(fetchMoviesSuccessAction);
DisableLoadingObserverActionsTypes.push(fetchMoviesErrorAction);
DisableLoadingObserverActionsTypes.push(fetchMovieByIdSuccessAction);
DisableLoadingObserverActionsTypes.push(fetchMovieByIdErrorAction);
// DisableLoadingObserverActionsTypes.push(registerUserSuccessAction);
// DisableLoadingObserverActionsTypes.push(registerUserErrorAction);

ModalObserverActionsTypes.push(fetchMoviesErrorAction);
