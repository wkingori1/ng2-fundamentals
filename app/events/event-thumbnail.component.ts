import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <!-- the event.id value is passed to the '/events' path as a query params when using [routerLink]-->
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name | uppercase}}</h2>
      <div>Date: {{event?.date | date:'shortDate'}}</div>
      <div>Time: {{event?.time}}</div>
      <div [ngClass]="getStartTime()" [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>

      <div>Price: {{event?.price | currency:'USD':true}}</div>

      <!-- you can use [hidden]="!event?.location" in place of the ngIf below-->
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span>&nbsp;</span>
        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <!--
      <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
      -->
    </div>
  `,
  styles: [`
      .green { color: #003300 ! important; }
      .bold { font-weight: bold; }
      .thumbnail { min-height: 210px; }
      .pad-left { margin-left: 10px; }
      .well div { color: #bbb; }
  `] //add deep selector if you want styles to affect child components
})

export class EventThumbnailComponent {
  @Input() event: any //means it will be of any type
  // someProperty: any = "some value"

  // @Output() eventClick = new EventEmitter()
  //
  // handleClickMe() {
  //   this.eventClick.emit(this.event.name)
  // }

  // logFoo() {
  //   console.log("foo")
  // }

  getStartTime () {
    const isEarlyStart = this.event && this.event.time === '8:00 am'
    return { green: isEarlyStart, bold: isEarlyStart}
  }
}
