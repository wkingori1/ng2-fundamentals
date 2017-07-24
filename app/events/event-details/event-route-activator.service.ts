import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor (private eventService: EventService, private router: Router) {

  }

  //current route is passed into the canActivate method as the first parameter
  canActivate(route: ActivatedRouteSnapshot) {
    //double bang casts the result of the getEvent call to a boolean
    const eventExists = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExists)
      this.router.navigate(['/404'])
    //returns boolean to see if route can exist  
    return eventExists
  }

}
