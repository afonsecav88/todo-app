import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllTaskComponent } from './components/all-task/all-task.component';
import { ActiveTaskComponent } from './components/active-task/active-task.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'all-task',
        component: AllTaskComponent,
      },
      {
        path: 'active-task',
        component: ActiveTaskComponent,
      },
      {
        path: 'complete-task',
        component: CompletedTaskComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
