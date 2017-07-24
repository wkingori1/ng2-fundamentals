import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }

  //an injectable service that implements resolve
  resolve() {
    //example of making an asynchronous call

    //getEvents returns an observable

    //calling map gives us a access to the events that are passed in this stream

    //the shorthand approach of events => events is the same
      //as asssigning the results of the data to `this.event`

    //typically when you call an observable you would call subscribe right here
      //but because it is a resolver and we need to actually return the
      //observable to Angular so Angular knows to watch it

    //if we were to call subsrcibe the value returned wouldn't be the observable

    //map does the same thing but returns the observable

    //because we are returning an observable the data will get passed to our component,
      //in this case, the events component
    return this.eventService.getEvents().map(events => events)
  }
}
