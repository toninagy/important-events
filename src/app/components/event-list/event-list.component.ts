import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public events: Array<Event> = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getAll().subscribe((data) =>  {
      this.events = data;
    });
  }

  public onSave(event: Event) {
    this.eventService.update(event.id, event);
  }

}
