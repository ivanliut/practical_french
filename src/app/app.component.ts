import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exercises } from './resources/exercices.paths';
import { Store, select } from '@ngrx/store';
import { LoadExercises } from './actions';
import { selectExercises } from './selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    info$: Observable<any>;

    constructor(
        private http: HttpClient,
        private store: Store<any>
    ) {
        this.info$ = this.http.get(
            exercises.url
        );
    }

    ngOnInit() {
        this.store.dispatch(new LoadExercises());
        this.store.pipe(
            select(selectExercises)
        )
        .subscribe(exers => {
            console.log(`from selector`, exers);
        });
    }


}
