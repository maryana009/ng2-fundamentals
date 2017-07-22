import { NgModule} from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { RouterModule} from '@angular/router'

import { EventsAppComponent} from './events-app.component'
import { EventsListComponent} from './events/events-list.component'
import { EventThumbnailComponent} from './events/event-thumbnail.component'
import { NavBarComponent} from './nav/navbar.component'
import { EventService} from './events/shared/event.service'
import { ToastrService} from './common/toastr.service'
import { EventDetailsComponent} from './events/event-details/event-details.component'
import { CreateEventComponent} from './events/create-event.component'
import { Error404Component} from './errors/404.component'
import { appRoutes} from './routes'
import { EventRouterActivator} from './events/event-details/event-router-activator.service'


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
    providers: [EventService, ToastrService, EventRouterActivator],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}
