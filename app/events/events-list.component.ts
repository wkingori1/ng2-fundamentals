import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

@Component({
  templateUrl: 'app/events/events-list.component.html'
})

//OnInit guarantees class should have a ngOnInit method implemented
export class EventsListComponent implements OnInit{
  events: IEvent[]

  constructor (private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    //the `events` from the data snapshot is coming from our route data resolver
    this.events = this.route.snapshot.data['events']
  }

}
