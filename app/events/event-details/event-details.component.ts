import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared/event.model'

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: [`
    .container { padding-left: 20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a {cursor: pointer;}
  `]
})

export class EventDetailsComponent {
  event: IEvent
  addMode: boolean
  filterBy: string = 'all'
  sortBy: string = 'votes'

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    //resetting the event property and the addMode property states
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params['id'])
      this.addMode = false
    })


    //'+' casts data type to number
    //id param is created by our route configuration
    //code below only changes the route param, it doesn't reload data in view - it doesn't change state
    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession() {
      this.addMode = true
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }

}
