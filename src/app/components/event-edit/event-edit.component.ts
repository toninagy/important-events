import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

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

  public onSave(event: Event): void {
    this.eventService.update(event.id, event).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }

}
