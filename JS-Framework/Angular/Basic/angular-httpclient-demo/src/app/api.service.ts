import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'b8b73fb310674e17b94bd2f50a09e968';

  URL = 'http://newsapi.org/v2/top-headlines?' +
  'sources=bbc-news&' +
  'apiKey=b8b73fb310674e17b94bd2f50a09e968';

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(this.URL);
  }
}
