import { NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { RouterModule} from '@angular/router'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver

} from './events/index'
import { EventsAppComponent} from './events-app.component'
import { NavBarComponent} from './nav/navbar.component'
import { ToastrService} from './common/toastr.service'
import { Error404Component} from './errors/404.component'
import { appRoutes} from './routes'


@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventThumbnailComponent,
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NavBarComponent,
        Error404Component

        
        ],
    providers: [
        EventService, 
        ToastrService, 
        EventRouterActivator,
        {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventListResolver
        ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
}