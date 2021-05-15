import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
  })
export class NbaDataService {
  constructor(private http: HttpClient) {}
  private urlAPI = 'https://free-nba.p.rapidapi.com/players';
  getAllPlayes(page: string, per_page: string): Observable<any> {
    const options = {
      headers: {
        'x-rapidapi-key': 'f430b1d990msh1cd469be337f2a0p11de27jsn147fadf6bdc0',
      },
      params: {
        page: page,
        per_page: per_page,
      },
    };
    return this.http.get<any>(this.urlAPI, options);
  }
  searchGetCall(text: string): Observable<any> {
    const options = {
      headers: {
        'x-rapidapi-key': 'f430b1d990msh1cd469be337f2a0p11de27jsn147fadf6bdc0',
      },
      params: {
        search: text,
      },
    };
    return this.http.get(this.urlAPI, options);
  }
}
