import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import  {ITasks } from '../ITask'

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<ITasks>>{
    return this.http.get<Array<ITasks>>(this.apiUrl);
  }

  deleteTask(task: ITasks): Observable<ITasks> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<ITasks>(url)
  }
}
