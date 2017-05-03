import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'events-list',
  templateUrl: 'app/events/events-list.component.html'
})

//OnInit guarantees class should have a ngOnInit method implemented
export class EventsListComponent implements OnInit{
  events: any[]

  constructor (private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

  // handleEventClicked(data) {
  //   console.log('received:', data)
  // }

}
