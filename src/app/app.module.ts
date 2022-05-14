import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventNewComponent } from './components/event-new/event-new.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    EventFormComponent,
    IndexComponent,
    AboutComponent,
    EventNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
