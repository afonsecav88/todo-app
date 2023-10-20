import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.css'],
})
export class CompletedTaskComponent {
  constructor(private tasksService: TasksService) {}

  public get tasks(): Task[] {
    return this.tasksService.tasks;
  }

  deleteAllTask() {
    this.tasksService.deleteAllTaskDo();
  }

  deleteOneTask(i: number) {
    this.tasksService.deleteOneTaskDo(i);
  }
}
