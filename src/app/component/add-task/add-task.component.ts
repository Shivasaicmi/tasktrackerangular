import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/types/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskName!:string
  day!:string
  reminder!:boolean

  @Output() addTaskEvent:EventEmitter<Task> = new EventEmitter<Task>();

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.taskName||!this.day||!this.reminder){
      alert("fill out the form");
      return;
    }

    const newTask:Task = {
      text:this.taskName,
      day:this.day,
      reminder:this.reminder
    }
    console.log(newTask);
    this.addTaskEvent.emit(newTask);
    this.taskName ='';
    this.reminder = false;
    this.day = '';
  }
}
