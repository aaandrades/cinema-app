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

export const fetchMovieByExpression = createAction(
  ngrxType('[Movies/UI] Fetch movie by expression Action'),
  props<{ expression: string }>()
);

export const fetchMovieByExpressionSuccessAction = createAction(
  ngrxType('[Movies/UI] Success fetching movie by expression action'),
  props<{ searchResults: any }>()
);

export const clearCurrentSearchAction = createAction(
  ngrxType('[Movies/UI] Clear current search action')
);

export const fetchPremiersAction = createAction(
  ngrxType('[Movies/UI] Get premiers movies action')
);

export const fetchPremiersActionSuccess = createAction(
  ngrxType('[Movies/UI] Get premiers movies success action'),
  props<{ premiers: any }>()
);

export const fetchNewMoviesSuccessAction = createAction(
  ngrxType('[Movies/UI] Fetch comming-soon movies success action'),
  props<{ comingSoon: any }>()
);

EnableLoadingObserverActionsTypes.push(fetchMovieById);
EnableLoadingObserverActionsTypes.push(fetchMovieByExpression);
EnableLoadingObserverActionsTypes.push(fetchPremiersAction);

DisableLoadingObserverActionsTypes.push(fetchMoviesSuccessAction);
DisableLoadingObserverActionsTypes.push(fetchMovieByIdSuccessAction);
DisableLoadingObserverActionsTypes.push(fetchMovieByExpressionSuccessAction);
DisableLoadingObserverActionsTypes.push(fetchNewMoviesSuccessAction);

DisableLoadingObserverActionsTypes.push(fetchMoviesErrorAction);

ModalObserverActionsTypes.push(fetchMoviesErrorAction);
