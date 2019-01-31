import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title$: Observable<any>;

    constructor(private http: HttpClient) {
        let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
        headers = headers.append('Content-Type', 'application/json');
        this.title$ = this.http.post(
            'https://hlo2oz04nb.execute-api.us-east-2.amazonaws.com/dev/compare-yourself',
        {
            'age': 27
        },
        { headers }
    );
        console.log(this.title$);
    }

}
