import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'http://127.0.0.10/api/events';

  constructor(private httpClient: HttpClient) {}

  public getAllWithPromise(): Promise<Event[]> {
    return this.httpClient.get<Event[]>(this.url).toPromise();
  }

  public getAll(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.url);
  }

  public get(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.url}/${id}`);
  }

  public update(id: number, modifiedEvent: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.url}/${id}`, modifiedEvent);
  }

  public add(newEvent: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.url, newEvent);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
