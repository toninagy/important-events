import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public numObj = {
    counter: 0,
    dates: ["", ""]
  }

  constructor(private eventService: EventService) {
    eventService.getAll().subscribe(val => {
      this.numObj.counter = val.length;

      var earliestDate = val[0].date;
      var latestDate = val[0].date;

      val.forEach(function (value) {
        if(value.date < earliestDate) {
          earliestDate = value.date;
        }
        if(value.date > latestDate) {
          latestDate = value.date;
        }
      });

      this.numObj.dates[0] = earliestDate;
      this.numObj.dates[1] = latestDate;
    });
  }

  ngOnInit(): void {
  }

}
