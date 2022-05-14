import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  // public num: number = 0 ;
  public numObj = {
    counter:0,
    dates:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
