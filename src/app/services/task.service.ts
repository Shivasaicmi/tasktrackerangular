import { APP_ID, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Task } from '../types/tasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:3000/";

  private http!:HttpClient
  constructor(http:HttpClient) {
    this.http = http;
  }
  
  deleteTaskById(task:Task):Observable<Task[]>{
    const url = `${this.baseUrl} ${task.id}`;
    console.log(url)
    return this.http.delete<Task[]>(url);
  }

  toggleTask(task:Task) : Observable<Task[]> {
    const body = {
      ...task
    }
    return this.http.patch<Task[]>(this.baseUrl,body);
  }

}
