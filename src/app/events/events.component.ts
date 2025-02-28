import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [NgFor]
})
export class EventsComponent implements OnInit {

  public events: any;

  constructor(private https: HttpClient) { }

  ngOnInit() {
    this.getEvents();
  }

  public getEvents(): void{
         this.https.get('https://localhost:4091/api/events').subscribe(
            response => this.events = response,
            error => console.log(error)
         );
  }
}
