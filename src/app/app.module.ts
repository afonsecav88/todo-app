import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './todo/pages/home-page/home-page.component';
import { AddTaskComponent } from './todo/components/add-task/add-task.component';
import { AllTaskComponent } from './todo/components/all-task/all-task.component';
import { ActiveTaskComponent } from './todo/components/active-task/active-task.component';
import { CompletedTaskComponent } from './todo/components/completed-task/completed-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddTaskComponent,
    AllTaskComponent,
    ActiveTaskComponent,
    CompletedTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
