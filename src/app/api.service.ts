import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseURL: string = 'https://160.119.142.236:52773/csp/development/save';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    console.log('getPeople ' + this.baseURL);
    return this.http.get<Person[]>(this.baseURL);
  }

  addPerson(person: Person): Observable<any> {
    let username = 'vijay';
    let password = 'test123!';
    let user = username + ':' + password;
    const headers = {
      'content-type': 'application/json',
      Authorization: 'Basic ' + btoa(user),
      'Access-Control-Allow-Origin': '*',
    };
    const body = JSON.stringify(person);

    console.log(body);
    return this.http.post(this.baseURL + body, { headers: headers });
  }
}
