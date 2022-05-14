import { Injectable } from '@angular/core';
import { Event } from 'src/app/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Array<Event> = [
    {
      id: 1,
      title: "asdasd",
      location: "sdasds",
      date: "",
      note: "sdfs"
    },
    {
      id: 2,
      title: "dgfdsgsd",
      location: "dadsafsa",
      date: "",
      note: "fdfsdfe"
    }
  ];

  constructor() { }

  public getAll(): Event[] {
    return this.events;
  }
}
