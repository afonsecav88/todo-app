import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css'],
})
export class AllTaskComponent {
  constructor(private tasksService: TasksService) {}
  public get tasks(): Task[] {
    return this.tasksService.tasks;
  }
}
