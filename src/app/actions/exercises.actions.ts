import { Action } from '@ngrx/store';

export const LOAD_EXERCISES = `[Exercises] Load exercices`;
export const LOAD_EXERCISES_SUCCESS = `[Exercises] Load exercices success`;
export const LOAD_EXERCISES_FAIL = `[Exercises] Load exercices fails`;

export class LoadExercises implements Action {
    readonly type = LOAD_EXERCISES;
}

export class LoadExercisesSuccess implements Action {
    readonly type = LOAD_EXERCISES_SUCCESS;
    constructor(public payload: any) {}
}

export class LoadExercisesFail implements Action {
    readonly type = LOAD_EXERCISES_FAIL;
}

export type ExercisesAction =
| LoadExercises
| LoadExercisesSuccess
| LoadExercisesFail;

