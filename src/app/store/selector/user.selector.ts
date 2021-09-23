import {createFeatureSelector, createSelector} from '@ngrx/store';
import { UserState } from '../model/user.state';

const userState = createFeatureSelector<UserState>('userState');
export const userSelector = createSelector(userState, (state: UserState) => state);
