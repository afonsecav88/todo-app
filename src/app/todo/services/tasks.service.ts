import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private allTasks: Task[] = [];

  constructor() {
    this.getLocalStorage();
  }

  get tasks(): Task[] {
    return [...this.allTasks];
  }

  private updateLocalStorage() {
    localStorage.setItem('task', JSON.stringify(this.allTasks));
  }

  private getLocalStorage(): void {
    if (!localStorage.getItem('task')) return;
    this.allTasks = JSON.parse(localStorage.getItem('task')!);
  }

  addTaskLocalStorage(task: string): void {
    const newTask: Task = { task: task.trim(), checked: false };
    this.allTasks.push(newTask);
    this.updateLocalStorage();
  }

  markTaskAsDo(index: number) {
    this.allTasks.forEach((task) => {
      task = this.allTasks[index];
      task.checked = true;
    });
    this.updateLocalStorage();
  }

  deleteOneTaskDo(index: number) {
    let taskDo: Task = { task: '' };
    this.allTasks.forEach((task) => {
      task = this.allTasks[index];
      taskDo = task;
    });
    this.allTasks.splice(index, 1);
    this.updateLocalStorage();
  }

  deleteAllTaskDo() {
    this.allTasks = this.allTasks.filter((task) => task.checked == false);
    this.updateLocalStorage();
  }
}
