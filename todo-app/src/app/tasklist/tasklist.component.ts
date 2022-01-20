import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTaskList();
  }
  
  getTaskList() {
 
    this.taskService.getAllTasks().subscribe( res => { 
      res.map((t) => {
        console.log("desc " +t.description);
      });
     
    });;
   console.log( "resp ");
   
  }

}
