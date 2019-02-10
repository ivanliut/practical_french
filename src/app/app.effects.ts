import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { LOAD_EXERCISES, LoadExercisesSuccess } from './actions';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { exercises } from './resources/exercices.paths';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<any>
  ) {}

  @Effect()
exercises$ = this.actions$.pipe(
      ofType(LOAD_EXERCISES),
      switchMap(() => {
        return this.http.get(
          exercises.url
        )
        .pipe(
          map(res => {
            return new LoadExercisesSuccess(res);
          })
        );
      })
);

}
