import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import  {ITasks } from '../ITask'
import { TASKS } from '../mock-tasks'

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Array<ITasks>>{
    const tasks = of(TASKS);
    return tasks;
  }
}
