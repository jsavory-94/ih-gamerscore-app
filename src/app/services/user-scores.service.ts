import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
const API_URL = environment.apiUrl + '/user-info';

@Injectable()
export class UserScoreService {

    constructor(private httpClient: HttpClient) { }

    score(user: any): Promise<any> {
        const options = {
          withCredentials: true
        };
        return this.httpClient.post(`${API_URL}/input-form`, user, options)
          .toPromise()
      }
}