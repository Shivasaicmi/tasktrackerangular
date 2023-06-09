import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = "Task Tracker";

  toggleTask(){
    console.log("button clicked and event is handled from the header")
  }
}
