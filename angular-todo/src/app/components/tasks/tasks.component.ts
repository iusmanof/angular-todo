import { TaskService } from './../../services/task.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/app/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Array<ITasks> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: ITasks) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: ITasks) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
