import { ITasks } from './../../ITask';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITasks;
  @Output() onDeleteTask: EventEmitter<ITasks> = new EventEmitter()
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: ITasks) {
    this.onDeleteTask.emit(task)
  }
}
