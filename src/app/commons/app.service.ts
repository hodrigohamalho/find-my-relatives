import { Injectable } from '@angular/core';
import { Environment } from './../environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import "rxjs/add/operator/toPromise";

@Injectable()
export class AppService {

    private environment: Environment;

    constructor(
        private http: HttpClient,
    ) {
        this.environment = new Environment();
    }

    public getHttpClient(): HttpClient {
        return this.http;
    }

    public getEnvironment(): Environment {
        return this.environment;
    }

    public setupOptions(): any {
        return {};
    }

    public handleError(error: any) {
        // console.log('custom-http-client handleError')
        // console.log(error)
        if (error.status === 401) {
            console.log('error 401');
        }
        return Observable.throw(error);
    }


}