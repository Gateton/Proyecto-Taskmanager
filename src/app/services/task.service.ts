import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() { }

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  addTask(taskName: string) {
    const newTask: Task = {
      id: Date.now(),
      name: taskName
    };
    this.tasks.push(newTask);
    this.tasksSubject.next([...this.tasks]);
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.tasksSubject.next([...this.tasks]);
  }
}