import { NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { RouterModule} from '@angular/router'
import { AuthService} from './user/auth.service'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventThumbnailComponent,
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        NavBarComponent,
        Error404Component

        
        ],
    providers: [
        EventService, 
        ToastrService, 
        EventRouterActivator,
        AuthService,
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