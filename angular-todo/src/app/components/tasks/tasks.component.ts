import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/app/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Array<ITasks> = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
}
