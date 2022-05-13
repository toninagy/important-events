import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full",
  },
  {
    path: "events",
    component: EventListComponent,
  },
  {
    path: "events/new",
    component: EventFormComponent,
  },
  {
    path: "events/:id",
    component: EventDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
