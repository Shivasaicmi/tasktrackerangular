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

  task!:Task;

  @Output() addTaskEvent:EventEmitter<Task> = new EventEmitter<Task>();

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.taskName||!this.day||!this.reminder){
      alert("fill out the form");
      return;
    }

      this.task= {
      text:this.taskName,
      day:this.day,
      reminder:this.reminder
    }
    
    this.addTaskEvent.emit(this.task);
    this.taskName ='';
    this.reminder = false;
    this.day = '';
  }
}
