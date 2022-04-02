import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';
import { GhUser } from '../models/gh-user';

@Injectable()
export class GhApiService {
    private readonly baseUtld: string ='https://api.github.com/users'
  constructor(
    private http: HttpClient
  ) { }
  findUser(username:string): Observable<GhUser>{
    return this.http.get<GhUser>(`${this.baseUtld}/${username}`)
  }
}
