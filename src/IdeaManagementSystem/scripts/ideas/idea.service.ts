import {Injectable} from 'angular2/core';
import {Idea} from './idea';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Headers} from 'angular2/http';

@Injectable()
export class IdeaService {

    private http: Http;
    private apiUrl: string = 'http://localhost:5000/api/idea/';

    constructor(http: Http) {
        this.http = http;
    }

    public getAll() {
        return this.http.get(this.apiUrl).map(res => res.json());
    }

    public getById(id: string) {
        return this.http.get(this.apiUrl + id).map(res => res.json());
    }

    public addNew(idea: Idea) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiUrl, JSON.stringify(idea), { headers: headers }).map(res => res.json());
    }

    public deleteById(id: string) {
        return this.http.delete(this.apiUrl + id).map(res => res.json());
    }

    public updateById(id: string, idea: Idea) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiUrl + id, JSON.stringify(idea), { headers: headers }).map(res => res.json());
    }

} 