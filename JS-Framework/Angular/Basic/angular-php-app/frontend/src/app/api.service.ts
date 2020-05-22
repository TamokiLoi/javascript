import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://127.0.0.1:8080/api/';

  constructor(private httpClient: HttpClient) { }

  readPolicies(): Observable<Policy[]> {
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}read.php`)
  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}create.php`, policy);
  }

  updatePolicy(policy: Policy): Observable<Policy>{
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}update.php`, policy);
  }

  deletePolicy(id: number) {
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}delete.php/?id=${id}`);
  }
}
