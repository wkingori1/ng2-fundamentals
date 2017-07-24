import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//example of using barrels to import components into app module from events/index.ts
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  EventRouteActivator,
  EventListResolver,
  DurationPipe
} from './events/index'

//components
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'

//common
import { TOASTR_TOKEN,
  JQ_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index'

//services
import { AuthService } from './user/auth.service'

//routes config
import { appRoutes } from './routes'

//GLOBAL VARAIBLES
declare let toastr: Toastr
declare let jQuery: Object


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    NavBarComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  providers: [
    //providers below are using a shorthand approach
    // example of longhand approach { provide: EventService: useClass: EventService}
    //long hand is useful when you need to instantiate separate classes, ex: { provide: EventService: useClass: EventServiceImpl}
    //others include `useExisting` and `useFactory`
    EventService,
    { provide: JQ_TOKEN, useValue: jQuery},
    { provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivator,
    EventListResolver,
    //long hand way to add a service/provider
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {

}

function checkDirtyState(component:CreateEventComponent) {
  //component.isDirty is set by CreateEventComponent
  if (component.isDirty)
    //window.confirm returns true if Okay is clicked and false if Cancel is clicked
    return window.confirm('You have not saved this event, do you really want to cancel?')
  //default state is to not deactivate route noted by return of true
  return true
}
