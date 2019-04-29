import { Environment } from './../environment';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import "rxjs/add/operator/toPromise";

export abstract class RESTService {

    public ambiente: Environment;
    private http: HttpClient;

    constructor(public appService: AppService) {
        this.http = appService.getHttpClient();
        this.ambiente = new Environment();
    }

    abstract getURLBase(): string; // must be implemented in derived classes    

    get(url) {
        return this.http.get(this.ambiente.getApiUrl() + this.getURLBase() + url, this.appService.setupOptions()).catch(this.appService.handleError);
    }

    post(url, obj) {
        return this.http.post(this.ambiente.getApiUrl() + this.getURLBase() + url, obj, this.appService.setupOptions()).catch(this.appService.handleError);
    }

    count() {
        return this.http.get(this.ambiente.getApiUrl() + this.getURLBase() + 'count', this.appService.setupOptions()).map(response => response).catch(this.appService.handleError);
    }

    getAll() {
        return this.http.get(this.ambiente.getApiUrl() + this.getURLBase() + '', this.appService.setupOptions()).map(response => response).catch(this.appService.handleError);
    }

    getAllPager(page: number, perPage: number) {
        return this.http.get(this.ambiente.getApiUrl() + this.getURLBase() + 'pager/' + page + '/' + perPage, this.appService.setupOptions()).map(response => response).catch(this.appService.handleError);
    }

    getById(id: string) {
        return this.http.get(this.ambiente.getApiUrl() + this.getURLBase() + id, this.appService.setupOptions()).map(response => response).catch(this.appService.handleError);
    }

    create(obj) {
        return this.http.post(this.ambiente.getApiUrl() + this.getURLBase() + 'create', obj, this.appService.setupOptions()).map((response) => response).catch(this.appService.handleError);
    }

    update(id: string, obj) {
        return this.http.put(this.ambiente.getApiUrl() + this.getURLBase() + 'update', obj, this.appService.setupOptions()).map((response) => response).catch(this.appService.handleError);
    }

    delete(id: string) {
        return this.http.delete(this.ambiente.getApiUrl() + this.getURLBase() + 'delete/' + id, this.appService.setupOptions()).map((response: Object) => response).catch(this.appService.handleError);
    }



}