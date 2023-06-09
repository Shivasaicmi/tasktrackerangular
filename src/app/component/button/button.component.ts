import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input() text!:string;
  @Input() color!:string;

  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }
}
