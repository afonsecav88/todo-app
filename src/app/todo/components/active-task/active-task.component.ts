import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-active-task',
  templateUrl: './active-task.component.html',
  styleUrls: ['./active-task.component.css'],
})
export class ActiveTaskComponent {
  constructor(private tasksService: TasksService) {}
  get tasks(): Task[] {
    return this.tasksService.tasks;
  }

  taskDo(event: any, id: number) {
    if (event.target.checked) {
      this.tasksService.markTaskAsDo(id);
    }
  }
}
