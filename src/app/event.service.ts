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

  public get(id: number): Event | undefined {
    let event = this.events.find((event: Event) => event.id === id);
    return event;
  }

  public update(id: number, modifiedEvent: Event): Event | undefined {
    let event = this.get(id);
    Object.assign(event, modifiedEvent);
    return event;
  }

  public add(newEvent: Event): Event | undefined {
    newEvent.id = new Date().getMilliseconds();
    this.events.push(newEvent);
    return newEvent;
  }
}
