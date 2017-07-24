import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component ({
    /*selector: 'events-list',*/
    template: `
    <div>
        <h1>Upcoming Angulare 2 Events</h1>
        <hr/>
        <div class="row">
            <div  *ngFor="let event of events"  class="col-md-5">
                <event-thumbnail [event]="event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo</button>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any
    constructor (private eventService: EventService, private toastr: ToastrService){
        
    }

    ngOnInit() {
        //this.events = this.eventService.getEvents()
        this.eventService.getEvents().subscribe(events => {this.events = events})
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}