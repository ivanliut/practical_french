import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exercises } from './resources/exercices.paths';
import { Store } from '@ngrx/store';
import { LoadExercises } from './actions';

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
    }


}
