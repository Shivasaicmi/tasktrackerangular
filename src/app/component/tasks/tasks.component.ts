import { Component, OnInit,} from '@angular/core';
import  {HttpClient} from "@angular/common/http";

import {Task } from '../../types/tasks';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks!:Task[];

  private apiUrl = 'http://localhost:3000/';

  constructor(private http:HttpClient,private taskService:TaskService){
    this.taskService = taskService;
    this.http = http;
  }

  getData (){
    const response =  this.http.get<Task[]>(this.apiUrl);
    return response;
  }

  toggleTask(task:Task){
    this.taskService.toggleTask(task).subscribe((tasks:Task[])=>{
        this.tasks = tasks;
    })
  }

  ngOnInit(): void {
     this.getData().subscribe((task:Task[])=>{
      this.tasks = task;
     });
  }
  addTask(task:any){
    this.taskService.addTask(task).subscribe((tasks)=>{
      this.tasks = tasks;
    })
  }

  deleteTask(task:Task){
   this.taskService.deleteTaskById(task).subscribe((tasks:Task[])=>{
    this.tasks = tasks;
   })
  }



}
