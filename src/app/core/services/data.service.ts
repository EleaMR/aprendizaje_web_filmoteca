import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from '../config/api.config';

export type QueryParams = Record<
  string,
  string | number | boolean | ReadonlyArray<string | number | boolean>
>;

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly baseUrl = API_BASE_URL;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: QueryParams): Observable<T> {
    return this.http.get<T>(this.buildUrl(endpoint), { params });
  }

  post<T>(endpoint: string, body: unknown, params?: QueryParams): Observable<T> {
    return this.http.post<T>(this.buildUrl(endpoint), body, { params });
  }

  put<T>(endpoint: string, body: unknown, params?: QueryParams): Observable<T> {
    return this.http.put<T>(this.buildUrl(endpoint), body, { params });
  }

  delete<T>(endpoint: string, params?: QueryParams): Observable<T> {
    return this.http.delete<T>(this.buildUrl(endpoint), { params });
  }

  private buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint.replace(/^\/+/, '')}`;
  }
}
