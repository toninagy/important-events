import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventNewComponent } from './components/event-new/event-new.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "events",
    component: EventListComponent,
  },
  {
    path: "events/new",
    component: EventNewComponent,
  },
  {
    path: "events/:id",
    component: EventDetailComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
