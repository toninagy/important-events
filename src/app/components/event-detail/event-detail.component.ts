import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/event';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public event: Event = new Event();

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
    // this.event = eventService.getAll()[0];
  }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.event = this.eventService.getAll().filter((event: Event) => event.id === id)[0];
  }

}
