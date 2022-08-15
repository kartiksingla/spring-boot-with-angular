import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Input } from '../model/migration/input'
import { Greet } from '../model/greet'
import { Dependencies } from '../model/migration/dependencies'

@Injectable({
  providedIn: 'root'
})
export class MigrationService {

  private apiServer = "http://localhost:8080";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  getGreetingMessage() : Observable<Greet> {
    return this.httpClient.get<Greet>(this.apiServer + "/greet")
    .pipe(
        catchError((err) => {
          console.log('error caught in service')
          console.error(err);

          //Handle the error here

          return throwError(err);    //Rethrow it back to component
        })
      )
  }

  postMigrateGradleDependencies(inputData : Input) : Observable<any> {
      const body=JSON.stringify(inputData);
      console.log('Inputdata : ', body)
      return this.httpClient.post(this.apiServer + "/migrate", body, { 'headers' : this.httpOptions.headers})
      .pipe(
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);

            //Handle the error here

            return throwError(err);    //Rethrow it back to component
          })
        )
  }

}
