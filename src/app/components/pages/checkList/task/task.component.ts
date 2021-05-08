import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from "app/shared/interfaces/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  @Output() edit=new EventEmitter<Task>();
  constructor() { }   

  ngOnInit() {
  }

}
