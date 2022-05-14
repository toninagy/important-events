import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit, OnChanges {
  @Input() event: Event;
  @Output() save: EventEmitter<Event> = new EventEmitter<Event>();

  public eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnChanges(): void {
    this.eventForm = this.formBuilder.group({
      id: this.event?.id,
      title: [this.event?.title, [Validators.required]],
      location: [this.event?.location, [Validators.required]],
      date: [this.event?.date, [Validators.required]],
      note: [this.event?.note, [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log('init');
    this.eventForm = this.formBuilder.group({
      id: this.event?.id,
      title: [this.event?.title, [Validators.required]],
      location: [this.event?.location, [Validators.required]],
      date: [this.event?.date, [Validators.required]],
      note: [this.event?.note, [Validators.required]]
    });
  }

  public onSave(e: any) {
    this.save.emit(this.eventForm.value);
  }

  public isInvalidAndTouchedOrDirty(name: string) {
    return !this.eventForm.get(name)?.valid && (this.eventForm.get(name)?.touched || this.eventForm.get(name)?.dirty)
  }

}
