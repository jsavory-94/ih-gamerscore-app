import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
const API_URL = environment.apiUrl + '/user-info';

@Injectable()
export class UserScoreService {

    constructor(private httpClient: HttpClient) { }

    score(scores: any): Promise<any> {
        const options = {
          withCredentials: true
        };
        return this.httpClient.post(`${API_URL}/input-form`, { scores: scores }, options)
          .toPromise()
      }

    getScore(id: string): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.get(`${API_URL}/users/${id}`, options)
        .toPromise()
    }

    getAllUsers(): Promise<any> {
      const options = {
        withCredentials: true
      };
      return this.httpClient.get(`${API_URL}/users`, options)
        .toPromise()
    }
}