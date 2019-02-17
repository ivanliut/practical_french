import { createFeatureSelector } from '@ngrx/store';


export interface AppState {
    exercises: any;
}

export const selectExercises = createFeatureSelector(
   'exercises'
);
