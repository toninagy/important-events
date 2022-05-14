import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventNewComponent {

  constructor(private eventService: EventService, private router: Router) { }

  public onSave(event: Event) {
    this.eventService.add(event);
    this.router.navigate(['/events']);
  }

}
