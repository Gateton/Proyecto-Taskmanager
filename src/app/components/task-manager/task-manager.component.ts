import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks$: Observable<Task[]>;
  newTaskName: string = '';

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnInit(): void {
  }

  addTask() {
    if (this.newTaskName.trim()) {
      this.taskService.addTask(this.newTaskName);
      this.newTaskName = '';
    }
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}