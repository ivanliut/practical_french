import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { exercisesReducer } from './exercises.reducer';

export interface State {
  exercises: any[];
}

export const reducers: ActionReducerMap<State> = {
  exercises: exercisesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
