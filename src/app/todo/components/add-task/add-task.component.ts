import { Component, ElementRef, ViewChild } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor(private tasksService: TasksService) {}

  @ViewChild('text')
  public text!: ElementRef<HTMLInputElement>;

  addTask(): void {
    const task = this.text.nativeElement.value;
    if (!task) return;
    this.tasksService.addTaskLocalStorage(task);
    this.text.nativeElement.value = '';
  }
}
