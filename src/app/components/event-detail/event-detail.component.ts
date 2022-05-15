import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/event';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public event: Event;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute,
    private router: Router) {
    // this.event = eventService.getAll()[0];
  }

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.event = this.eventService.get(id) as Event;
  }

  public onDeleteClick() {
    this.eventService.delete(this.event.id);
    console.log(this.event);
    this.router.navigate(['/events']);
  }

}
