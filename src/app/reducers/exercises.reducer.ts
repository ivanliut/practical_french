import { ExercisesAction } from '../actions';
import * as fromExercises from '../actions';

export interface State {
    exercises: any[];
}

export class InitialState {
    exercises = [];
}

export function exercisesReducer(state = [], action: ExercisesAction): any {
    switch (action.type) {
        case fromExercises.LOAD_EXERCISES_SUCCESS: {
            console.log(action);
            return [...state, { ...action.payload }];
        }
    }
    return state;
}
