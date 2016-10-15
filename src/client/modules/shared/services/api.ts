import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });

    constructor(private http: Http) {}
    private getJson(response: Response) {
        try {
            return response.json()
        } catch (err) {}
        return response;
    }
    private checkForError(response: Response): Response {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }
    get(uri: string): Observable<any> {
        return this.http.get(uri, this.headers)
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }
    post(uri: string, body): Observable<any> {
        return this.http.post(
            uri,
            JSON.stringify(body),
            { headers: this.headers }
        )
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }
    delete(uri: string): Observable<any> {
        return this.http.delete(uri, { headers: this.headers })
            .map(this.checkForError)
            .catch(err => Observable.throw(err))
            .map(this.getJson)
    }
    setHeaders(headers) {
        Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
    }
}
