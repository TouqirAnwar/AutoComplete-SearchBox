// Import dependencies
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Import interfaces
import { IUserResponse } from './interfaces/index';

@Injectable()
export class GithubService {
  private AUTH_TOKEN = '46aba533a8b18fbe8cd96dfcb15d4095ba720863'; // Set authenticaion token for API request
  constructor(
    public http: HttpClient
  ) { }

  /**
   * Gets all the users that match the input user search term from the GitHub API.
   * @param user {string} // User used to search the API
   */
  public getUsers(user: string): Observable<IUserResponse> {
    return this.http
      .get<IUserResponse>(`https://api.github.com/search/users?q=${user}&auth_token=${this.AUTH_TOKEN}`)
      .catch((error: HttpErrorResponse) => Observable.throw(error));
  }
}
