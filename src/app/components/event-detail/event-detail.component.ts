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

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.eventService.get(id).subscribe((data: Event) => {
      this.event = data;
    });
  }

  public onDeleteClick() {
    this.eventService.delete(this.event.id).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }

}
