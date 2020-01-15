import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {FormTasksComponent} from './tasks/form/form-tasks.component';


const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/:id/edit',
    component: FormTasksComponent
  },
  {
    path: 'tasks/create',
    component: FormTasksComponent
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
