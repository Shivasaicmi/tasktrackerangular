import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/types/tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!:Task;
  
  @Output() deleteEvent = new EventEmitter<Task>();
  @Output() toggleTaskEvent = new EventEmitter<Task>();
  private taskService !:TaskService

  constructor(taskService:TaskService){
      this.taskService = taskService;
  }

  ngOnInit(): void {
    
  }

  toggleTask(task:Task){
    this.toggleTaskEvent.emit(task);
  }

  onDelete(task:Task){
    this.deleteEvent.emit(task);
  
  }

}
