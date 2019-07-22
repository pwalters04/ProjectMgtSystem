import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectComponent } from './project/project.component';
import { MockDataComponent } from './mock-data/mock-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamMembersComponent,
    HomePageComponent,
    ProjectComponent,
    MockDataComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
