import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exercises } from './resources/exercices.paths';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    info$: Observable<any>;

    constructor(private http: HttpClient) {
        this.info$ = this.http.get(
            exercises.url
        );
    }

}
