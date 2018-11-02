import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const base = "https://api-ror.herokuapp.com/";
const base2 = "https://amheroku.herokuapp.com/";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    console.log(base);
    return this.http.get<User[]>(base + "users")
  }

  createAccount(user: User): Observable<User> {
    return this.http.post<User>(base + "users", user, httpOptions).pipe(
      tap((user: User) => console.log(`added user w/ id=${user.name}`))
      // catchError(this.handleError<User>('addHero'))
    );
  }
  
  createEvent(event: any): Observable<User> {
    return this.http.post<any>(base2 + "events", event, httpOptions).pipe(
      tap((event: any) => console.log(`added event w/ id=${event.name}`))
      // catchError(this.handleError<User>('addHero'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return null;
    };
  }
}