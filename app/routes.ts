import { Routes } from '@angular/router'
//example of using barrels to import components into app module from events/index.ts
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  CreateSessionComponent,
  EventListResolver
} from './events/index'

import { Error404Component } from './errors/404.component'

//types to Routes type, useful for IntelliSense
export const appRoutes:Routes = [
  //deactivates leaving this route unless canDeactivate returns true
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  //what this is saying is that set the returned data from the EventListResolver resolver to a property
    //named events
  { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
  //canActivate serves as a guard incase the route can't be activated
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  //default 404 path, example of usage is seen in `canActivate` example above
  { path: '404', component: Error404Component },
  //two options for pathMatch, full(redirect it fullymatches the specified path string) or
    //prefix(redirect if URL starts with the specified path string)
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  //what this says is that when we access the user route load the UserModule for this route
    //which is a feature/ lazy loadable module
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  //create a new session component
  { path: 'events/session/new', component: CreateSessionComponent }
]
