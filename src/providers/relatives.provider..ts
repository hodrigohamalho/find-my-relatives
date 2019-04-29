import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RESTService } from '../app/commons/rest.abstract';
import { AppService } from '../app/commons/app.service';

/*
  Generated class for the RelativesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RelativesProvider extends RESTService {

  getURLBase(): string {
    return '/5cc76e023200005258b95235/';
  }

  constructor(public appService: AppService) {
    super(appService);
  }

}
